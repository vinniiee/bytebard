"use client";

import { createTopic } from "@/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";
import { useFormState } from "react-dom";
import FormButton from "../form-button";

const CreateTopicForm = () => {
  const [formState, createTopicAction] = useFormState(createTopic, {
    errors: {},
  });
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"secondary"}>Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col sm:w-[600px] gap-3 p-8 max-h-[500px] pt-10">
        <h3 className="text-3xl font-semibold">Create a New Topic</h3>
        <form
          action={createTopicAction}
          className="flex flex-col items-end gap-6 h-full"
        >
          <div className="flex flex-col w-full gap-1 justify-start ">
            <Label className="text-xs font-light">Name</Label>
            <Input
              name="name"
              placeholder="Topic Name"
              className={formState.errors.name && "bg-red-100"}
            />
            {
              <p className="text-red-500 text-xs">
                {formState.errors.name?.join(", ")}
              </p>
            }
          </div>
          <div className="flex flex-col w-full gap-1 max-h-[150px] ">
            <Label className="text-xs font-light">Description</Label>
            <Textarea
              name="description"
              placeholder="Brief description of topic..."
              className={formState.errors.description && "bg-red-100"}
            />
            {
              <p className="text-red-500 text-xs">
                {formState.errors.description?.join(", ")}
              </p>
            }
          </div>
          {formState.errors._form && (
            <p className="text-red-500 text-sm w-full bg-red-100 p-2 rounded border-red-200 border-2">
              {formState.errors._form?.join(", ")}
            </p>
          )}
          <FormButton>Save</FormButton>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreateTopicForm;
