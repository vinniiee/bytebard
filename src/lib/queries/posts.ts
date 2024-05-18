import { db } from "../db";

export type PostWithMetadata = Awaited<
  ReturnType<typeof fetchPostsByTopic>
>[number];

export async function fetchPostsBySearchTerm(term: string) {
  return db.post.findMany({
    where: {
      OR: [
        {
          title: { contains: term },
        },
        {
          content: { contains: term },
        },
      ],
    },
    include: {
      _count: { select: { comments: true } },
      topic: { select: { slug: true } },
      user: { select: { name: true } },
    },
  });
}

export async function fetchPostsByTopic(topic: string) {
  return db.post.findMany({
    where: { topic: { slug: topic } },
    include: {
      _count: { select: { comments: true } },
      topic: { select: { slug: true } },
      user: { select: { name: true } },
    },
  });
}

export async function fetchAllPosts() {
  return db.post.findMany({
    take: 10,
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: true,
    },
  });
}
