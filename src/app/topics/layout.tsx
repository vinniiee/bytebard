import CreateTopicForm from "@/components/topics/create-topic-form";
import TopicList from "@/components/topics/topic-list";
import React from "react";

const AllPost = async ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-full  flex justify-between gap-8">
      {children}
      <div className=" flex flex-col items-start w-[300px]">
        <CreateTopicForm />
        <hr className="w-full bg-black my-2" />
        <TopicList/>
      </div>
    </div>
    );
};

export default AllPost;
