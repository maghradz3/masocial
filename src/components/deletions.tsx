"use client";

import { deleteComment, deletePost } from "@/actions/deletions";
import { Button } from "@nextui-org/react";

interface DeletePostButtonProps {
  postId: string;
  slug: string;
}

interface DeleteCommentButtonProps {
  commentId: string;
  slug: string | null;
}

export function DeletePostButton({ postId, slug }: DeletePostButtonProps) {
  const deleteHandler = async () => {
    await deletePost(postId, slug);
  };

  return (
    <div>
      <Button color="danger" variant="shadow" onClick={deleteHandler}>
        delete
      </Button>
    </div>
  );
}

export function DeleteCommentButton({
  slug,
  commentId,
}: DeleteCommentButtonProps) {
  const deleteHandler = async () => {
    await deleteComment(commentId, slug);
  };

  return (
    <div>
      <Button color="danger" variant="shadow" onClick={deleteHandler}>
        Delete
      </Button>
    </div>
  );
}
