import { db } from "../db";

export type CommentWithMetadata = Awaited<
  ReturnType<typeof fetchCommentsByPostId>
>[number];

export const fetchCommentsByPostId = async (postId: string) => {
  return db.comment.findMany({
    where: { postId },
    include: {
      user: { select: { name: true, image: true } },
    },
  });
};
