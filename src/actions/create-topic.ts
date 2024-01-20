"use server";
import { z } from "zod";
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes without space",
    }),
  description: z.string().min(15, { message: "Minimum 15 characters" }),
});

export const createTopic = async (formData: FormData) => {
  const validatedData = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!validatedData.success) {
    console.log(
      "\n--------------------------\nErrors:\n",
      validatedData.error.flatten().fieldErrors,
      "\n---------------------------"
    );
  }
  //   console.log(validatedData);
};
