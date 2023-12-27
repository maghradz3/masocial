import { db } from "@/db";
import { notFound } from "next/navigation";
import { set } from "zod";

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold my-2 text-cyan-500 ">{post.title}</h1>
      <p className=" text-sm p-2 md:text-xl md:p-4 border rounded">
        {post.content}
      </p>
    </div>
  );
}
