import Link from "next/link";
import { Suspense } from "react";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { fetchCommentsByPostID } from "@/db/queries/comments";
import paths from "@/paths";
import PostShowLoading from "@/components/posts/post-show-loading";
import MotionDivWrapper from "@/components/framer-divs/top-posts";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <MotionDivWrapper direction="right" deley={0.4}>
        <Link
          className="underline decoration-solid"
          href={paths.topicShow(slug)}
        >
          {"< "}Back to {slug}
        </Link>
      </MotionDivWrapper>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <MotionDivWrapper direction="down" deley={0.2}>
        <CommentCreateForm postId={postId} startOpen />
      </MotionDivWrapper>
      <MotionDivWrapper direction="right" deley={0.2}>
        <CommentList postId={postId} />
      </MotionDivWrapper>
    </div>
  );
}
