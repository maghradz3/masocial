import type { Post } from "@prisma/client";
import { db } from "..";
import PostList from "@/components/posts/post-list";

export type PostListItem = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export function fetchPostByTopicSlug(slug: string): Promise<PostListItem[]> {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}

export function fetchPostBySearchTerm(term: string): Promise<PostListItem[]> {
  return db.post.findMany({
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    where: {
      OR: [
        {
          title: { contains: term },
          content: { contains: term },
          user: { name: { contains: term } },
        },
      ],
    },
  });
}

export function fetchTopPost(): Promise<PostListItem[]> {
  return db.post.findMany({
    orderBy: [
      {
        comments: {
          _count: "desc",
        },
      },
    ],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    take: 5,
  });
}
