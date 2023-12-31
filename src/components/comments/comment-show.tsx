import Image from "next/image";
import { Button } from "@nextui-org/react";
import {
  CommentWithAuthor,
  fetchCommentsByPostID,
} from "@/db/queries/comments";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { auth } from "@/auth";
import { DeleteCommentButton } from "../deletions";

interface CommentShowProps {
  commentId: string;

  postId: string;
}

export default async function CommentShow({
  commentId,
  postId,
}: CommentShowProps) {
  const session = await auth();
  const comments = await fetchCommentsByPostID(postId);

  const comment = comments.find((c) => c.id === commentId);
  console.log(comment);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return <CommentShow key={child.id} commentId={child.id} postId={postId} />;
  });

  return (
    <div className="p-4 border border-slate-700 mt-2 mb-1">
      <div className="flex gap-3">
        <Image
          src={comment.user.image || ""}
          alt="user image"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">
                {comment.user.name}
              </p>
              <p className=" text-slate-200">{comment.content}</p>
            </div>
            {session?.user?.id === comment.userId && (
              <DeleteCommentButton
                slug={comment?.post?.topic?.slug}
                commentId={comment?.id}
              />
            )}
          </div>
          <CommentCreateForm postId={comment?.postId} parentId={comment?.id} />
        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </div>
  );
}
