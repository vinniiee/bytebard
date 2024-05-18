import CreatePostForm from "@/components/posts/create-post-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopic } from "@/lib/queries/posts";

type TopicShowProps = {
  params: {
    topic: string;
  };
};

const TopicShow = ({ params }: TopicShowProps) => {
  const { topic } = params;
  return (
    <div className="flex gap-4 justify-between pb-8 w-full">
      <div className="flex flex-col gap-2 w-full">
      <h1 className="text-4xl border-b-2 mb-4 pb-2">{topic}</h1>
      <div className="w-full">
        <PostList fetchPosts={() => fetchPostsByTopic(topic)} />
      </div>
      </div>
      <div className="flex flex-col justify-start items-center w-32">
      <CreatePostForm topic={topic} />
      </div>
    </div>
  );
};

export default TopicShow;
