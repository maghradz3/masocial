import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostBySearchTerm } from "@/db/queries/posts";

interface searchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: searchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostBySearchTerm(term)} />
    </div>
  );
}