import { db } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function PostShow({ postId }: { postId: string }) {
  await new Promise((resolve)=>{
    setTimeout(resolve, 5000);
  });
  const post = await db.post.findFirst({ where: { id: postId } });
  if (!post) {
    notFound();
  }
  return (
    <div className="my-4 flex flex-col gap-2 w-full" >
      <h1 className="text-2xl font-bold my-0.5 w-full">{post.title}</h1>
      <p className="p-4 border rounded w-full">{post.content}</p>
      {/* <CommentCreateForm postId={postId}/> */}
    </div>
  );
}
