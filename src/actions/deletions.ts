"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import paths from "@/paths";

export async function deletePost(
  postId: string,

  slug: string
) {
  await db.post.delete({
    where: {
      id: postId,
    },
  });
  revalidatePath(paths.topicShow(slug));
}

export async function deleteComment(commentId: string, postId: string) {

  const comment = await db.comment.findUnique({ where: { id: commentId } });
  if (!comment) {
    throw new Error("Comment not found");
  }

  await db.comment.deleteMany({ where: { parentId: commentId } });
  await db.comment.delete({ where: { id: commentId } });
}
