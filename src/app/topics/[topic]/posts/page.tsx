import CreatePostForm from "@/components/posts/create-post-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsWithTopic } from "@/lib/queries/posts";

type TopicShowProps = {
  params: {
    topic: string;
  };
};

const TopicShow = ({ params }: TopicShowProps) => {
  const { topic } = params;
  return (
    <div className="flex gap-4 justify-between py-8">
      <div className="w-full">
        <PostList fetchPosts={() => fetchPostsWithTopic(topic)} />
      </div>
      <div className="flex flex-col justify-start items-center">
      <CreatePostForm topic={topic} />
      </div>
    </div>
  );
};

export default TopicShow;
