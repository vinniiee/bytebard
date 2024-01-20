import { createTopic } from "@/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";

const CreateTopicForm = () => {
  return (
    <Popover>
      <PopoverTrigger><Button variant={"secondary"}>Create Topic</Button></PopoverTrigger>
      <PopoverContent className="flex flex-col sm:w-[600px] gap-3 p-8 max-h-[400px] pt-10">
        <h3 className="text-3xl font-semibold">Create a New Topic</h3>
        <form action={createTopic} className="flex flex-col items-end gap-6 h-full">
          <div className="flex flex-col w-full gap-1 justify-start ">
            <Label className="text-xs font-light">Name</Label>
            <Input name="name" placeholder="Topic Name" />
          </div>
          <div className="flex flex-col w-full gap-1 max-h-[150px] ">
            <Label className="text-xs font-light">Description</Label>
            <Textarea name="description" className="" placeholder="Brief description of topic..."/>
          </div>
          <Button className="max-w-xs">Create Topic</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreateTopicForm;
