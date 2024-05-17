import PostList from "@/components/posts/post-list";
import { PostWithMetadata, fetchAllPosts } from "@/lib/queries/posts";

const Page = async () => {
  const fetchPosts = () => {
    return new Promise<PostWithMetadata[]>((resolve) => {
      fetchAllPosts().then((posts) => {
        resolve(posts);
      });
    });
  };
  return (
    <div className="flex flex-col w-full  justify-start items-start gap-4">
      <h1 className="text-4xl font-medium ">All Posts</h1>
      <PostList fetchPosts={fetchPosts} />
    </div>
  );
};

export default Page;
