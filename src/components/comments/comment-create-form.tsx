"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import * as actions from "@/actions";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import FormButton from "../form-button";
import { Button } from "../ui/button";

interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
}

export default function CommentCreateForm({
  postId,
  parentId,
  startOpen,
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    actions.createComment.bind(null, { postId, parentId }),
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

        <FormButton>Create Comment</FormButton>
      </div>
    </form>
  );

  return (
    <div>
      <Button size="sm" variant="ghost" onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && form}
    </div>
  );
}
