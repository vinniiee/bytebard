"use client";
import { createPost } from "@/actions";
import { useFormState } from "react-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import FormButton from "../form-button";

const CreatePostForm = ({topic}:{topic:string}) => {
  const [formState, postCreateAction] = useFormState(createPost.bind(null,topic), {
    errors: {},
  });

  return (
    <Popover>
      <PopoverTrigger>
        <Button>New Post</Button>
      </PopoverTrigger>
      <PopoverContent className="m-2 min-w-[350px] p-4 py-8 mr-16">
        <form action={postCreateAction} className="flex flex-col gap-4 w-full">
          <div className="w-full">
            <Label>Title</Label>
            <Input name="title" />
            {formState.errors.title && (
              <p className="text-error">{formState.errors.title.join(", ")}</p>
            )}
          </div>
          <div>
            <Label>Content</Label>
            <Textarea name="content" />
            {formState.errors.content && (
              <p className="text-error">{formState.errors.content.join(", ")}</p>
            )}
          </div>
          {formState.errors._form && <p className="text-error">{formState.errors._form.join(", ")}</p>}
          <FormButton className="mt-4 self-end">Save</FormButton>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreatePostForm;
