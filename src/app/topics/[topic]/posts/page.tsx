import CreatePostForm from "@/components/posts/create-post-form";

type TopicShowProps = {
  params: {
    topic: string;
  };
};

const TopicShow = ({ params }: TopicShowProps) => {
  const { topic } = params;
  return <div className="flex gap-4 justify-between py-8">
    <div className="w-full">
    All post for the topic: {topic}
    </div>
    <CreatePostForm topic={topic}/>
  </div>;
};

export default TopicShow;
