import type { Post, User, Topic } from "@prisma/client";
import Link from "next/link";
import paths from "@/paths";
import type { PostListItem } from "@/db/queries/posts";

import { auth } from "@/auth";
import { DeletePostButton } from "../deletions";

interface PostListProps {
  fetchData: () => Promise<PostListItem[]>;
}
export default async function PostList({ fetchData }: PostListProps) {
  const session = await auth();

  const posts = await fetchData();
  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;
    // console.log(post);

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div
        key={post.id}
        className="border bg-slate-600 border-gray-200 rounded-lg p-4 hover:shadow-lg hover:dark:shadow-indigo-500/50  transition-shadow duration-200 flex justify-between items-center"
      >
        <Link href={paths.postShow(topicSlug, post.id)}>
          <h3 className="text-lg font-bold">{post.title}</h3>
          <div className="flex flex-col  xs:flex-row  gap-8">
            <p className="text-xs md:text-sm text-gray-400">
              By {post.user.name}
            </p>
            <p className="bg-gray-200 w-[110px] rounded-full px-3 py-1 text-xs font-medium text-gray-700 flex justify-center items-center">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
        {session?.user?.id === post.user.id && (
          <DeletePostButton postId={post.id} slug={topicSlug} />
        )}
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
