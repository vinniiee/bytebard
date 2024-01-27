import CreateTopicForm from "@/components/topics/create-topic-form";
import { Button } from "@/components/ui/button";
import { paths } from "@/paths";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col justify-start items-center py-16 w-full min-h-screen dark:bg-black">
      <div className="w-full flex justify-center items-center pt-40 mb-8">
        <svg className="w-full fill-black dark:fill-white animate-svg-text">
          <text
            textAnchor="middle"
            className="text-8xl stroke-black translate-x-1/2 dark:stroke-white font-bold"
            y="50%"
          >
            Bytebard.
          </text>
        </svg>
      </div>
      <div className="flex gap-8">
        
      <CreateTopicForm/>
      <Link href={paths.allTopicsShow()}><Button>Explore All</Button></Link>
      </div>
    </div>
  );
}
