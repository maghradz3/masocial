import type { Comment } from "@prisma/client";
import { db } from "..";
import { cache } from "react";

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null; id: string | null };
  post: { topic: { slug: string | null } };
};

export const fetchCommentsByPostID = cache(
  (postId: string): Promise<CommentWithAuthor[]> => {
    return db.comment.findMany({
      where: { postId },
      include: {
        user: { select: { name: true, image: true, id: true } },
        post: { select: { topic: { select: { slug: true } } } },
      },
    });
  }
);
