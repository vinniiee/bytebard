import CreateTopicForm from "@/components/topics/create-topic-form";
import TopicList from "@/components/topics/topic-list";
import React from "react";

const AllPost = async () => {
  return (
    <div className="w-full  flex justify-between">
      <div>All posts</div>
      <div className=" flex flex-col items-start w-[300px]">
        <CreateTopicForm />
        <hr className="w-full bg-black my-2" />
        <TopicList />
      </div>
    </div>
  );
};

export default AllPost;
