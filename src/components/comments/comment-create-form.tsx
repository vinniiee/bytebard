"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import FormButton from "../form-button";
import { Button } from "../ui/button";
import { createComment } from "@/actions";

interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
  triggerLabel?:string;
}

export default function CommentCreateForm({
  postId,
  parentId,
  startOpen,
  triggerLabel="New Comment",
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <form action={action} ref={ref}>
      <div className="space-y-2 px-1">
        <Label>Reply</Label>
        <Textarea name="content" placeholder="Enter your comment" />
        {formState.errors.content ? (
          <div className="p-2 bg-red-200 border rounded border-red-400">
            {formState.errors.content?.join(", ")}
          </div>
        ) : null}
        {formState.errors._form ? (
          <div className="p-2 bg-red-200 border rounded border-red-400">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}

        <FormButton >Create Comment</FormButton>
      </div>
    </form>
  );

  return (
    <div className="flex flex-col gap-4">
      <Button
        size="sm"
        className="w-32"
        onClick={() => setOpen(!open)}
      >
        {open?"Hide":triggerLabel}
      </Button>
      {open && form}
    </div>
  );
}
