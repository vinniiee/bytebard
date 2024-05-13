import { db } from "@/lib/db";
import { paths } from "@/paths";
import Link from "next/link";

const TopicList = async () => {
  const topics = await db.topic.findMany();

  const render = topics.map((topic) => (
    <Link
      href={paths.topicShow(topic.slug)}
      key={topic.id}
      className="bg-accent-foreground text-white p-2 px-4 rounded-full text-sm shadow-md font-light"
    >
      {topic.slug}
    </Link>
  ));

  return <div className="flex gap-2 flex-wrap">{render}</div>;
};

export default TopicList;
