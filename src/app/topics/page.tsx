import CreateTopicForm from "@/components/topics/create-topic-form";
import { db } from "@/lib/db";
import { paths } from "@/paths";
import Link from "next/link";
import React from "react";

const AllPost = async () => {
  const topics = await db.topic.findMany();

  const topicList = topics.map((topic) => (
    <Link
      href={paths.topicShow(topic.slug)}
      key={topic.id}
      className="bg-accent-foreground text-white p-2 px-4 rounded-full text-sm shadow-md font-light"
    >
      {topic.slug}
    </Link>
  ));

  console.log("topics", topics);
  return (
    <div className="w-full  flex justify-between">
      <div>All posts</div>
      <div className=" flex flex-col items-start w-[300px]">
        <CreateTopicForm />
        <hr className="w-full bg-black my-2" />
        <div className="flex gap-2 flex-wrap">{topicList}</div>
      </div>
    </div>
  );
};

export default AllPost;
