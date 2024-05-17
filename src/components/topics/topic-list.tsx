"use client";
import { paths } from "@/paths";
import { Topic } from "@prisma/client";
import Link from "next/link";
import {  useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TopicListSkeleton from "./topic-list-skeleton";

const TopicList = () => {
  const { topic: currentTopic } = useParams();
  const [topics,setTopics] = useState<Topic[]>([]);
  const[isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    fetch(`/api/topics`)
      .then((res) => res.json())
      .then(data=>setTopics(data))
      .catch((e) => console.log(e))
      .finally(()=>setIsLoading(false));
  },[])
    
  if(isLoading){
    return <TopicListSkeleton/>;
  }

  const render = topics.map((topic) => (
    <Link
      href={paths.topicShow(topic.slug)}
      key={topic.id}
      className={`${
        topic.slug === currentTopic
          ? "bg-white border-2 font-semibold border-black hover:bg-accent-background/70 text-black"
          : "bg-accent-foreground hover:bg-accent-foreground/70 text-white"
      } p-2 px-4 rounded-full text-sm shadow-md font-light`}
    >
      {topic.slug}
    </Link>
  ));
  return <div className="flex gap-2 flex-wrap">{render}</div>;
};

export default TopicList;
