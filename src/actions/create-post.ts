"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { paths } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createPostFormSchema = z.object({
  title: z.string().min(3, { message: "Must be atleast 3 character long." }),
  content: z
    .string()
    .min(15, { message: "Must be atleast 15 characters long." }),
});

export type CreatePostFormStateSchema = {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
};

export const createPost = async (
  topic: string,
  formState: CreatePostFormStateSchema,
  formData: FormData
): Promise<CreatePostFormStateSchema> => {
  const validatedData = createPostFormSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });
  if (!validatedData.success) {
    return { errors: validatedData.error.flatten().fieldErrors };
  }

  const session = await auth();
  if (!session || !session.user?.id) {
    return {
      errors: {
        _form: ["You must be logged in."],
      },
    };
  }

  const topicDetails = await db.topic.findFirst({
    where: { slug: topic },
  });
  if (!topicDetails) {
    return { errors: { _form: ["COuld not find the topic."] } };
  }

  let createdPost;
  try {
    createdPost = await db.post.create({
      data: {
        title: validatedData.data.title,
        content: validatedData.data.content,
        userId: session.user.id,
        topicId: topicDetails.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { errors: { _form: [err.message] } };
    } else {
      return { errors: { _form: ["Failed to create post."] } };
    }
  }
  console.log(createPost);

  revalidatePath(paths.topicShow(topic));
  redirect(paths.showPost(topic, createdPost.id));
};
