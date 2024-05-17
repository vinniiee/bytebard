import CreateTopicForm from "@/components/topics/create-topic-form";
import TopicList from "@/components/topics/topic-list";
import TopicListSkeleton from "@/components/topics/topic-list-skeleton";
import React, { Suspense } from "react";

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
        <Suspense fallback={<TopicListSkeleton/>}>
          <TopicList/>
        </Suspense>
      </div>
    </div>
    // <TopicListSkeleton/>
  );
};

export default AllPost;
