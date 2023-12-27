import CommentShow from "@/components/comments/comment-show";
import { fetchCommentsByPostID } from "@/db/queries/comments";

interface CommentListProps {
  postId: string;
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostID(postId);
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow key={comment.id} commentId={comment.id} postId={postId} />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">
        All <span className="text-cyan-500">{comments.length} comments</span>
      </h1>
      {renderedComments}
    </div>
  );
}
