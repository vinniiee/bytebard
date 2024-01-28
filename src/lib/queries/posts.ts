import { db } from "../db";

export type PostWithMetadata = Awaited<
  ReturnType<typeof fetchPostsWithTopic>
>[number];

export async function fetchPostsWithTopic(topic: string) {
  return db.post.findMany({
    where: { topic: { slug: topic } },
    include: {
      _count: { select: { comments: true } },
      topic: { select: { slug: true } },
      user: { select: { name: true } },
    },
  });
}
