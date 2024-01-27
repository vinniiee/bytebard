"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { paths } from "@/paths";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateTopicFormState = {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
};

const createTopicFormSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes without space",
    }),
  description: z.string().min(15, { message: "Minimum 15 characters" }),
});

export const createTopic = async (
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> => {
  const validatedData = createTopicFormSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!validatedData.success) {
    // console.log(
    //   "\n--------------------------\nErrors:\n",
    //   validatedData.error.flatten().fieldErrors,
    //   "\n---------------------------"
    // );
    return { errors: validatedData.error.flatten().fieldErrors };
  }
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["Please Sign In to create Topic."],
      },
    };
  }

  // await new Promise((resolve) => {
  //   console.log("pending....ewed121");
  //   setTimeout(resolve, 5000);
  // });

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: validatedData.data.name,
        description: validatedData.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong."],
        },
      };
    }
  }

  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
};
