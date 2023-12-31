import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostByTopicSlug } from "@/db/queries/posts";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;
  return (
    <div className=" grid grid-col-1 md:grid  md:grid-cols-4 gap-4 p-4">
      <div>
        <PostCreateForm slug={slug} />
      </div>
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2 text-slate-200">{slug}</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
      </div>
    </div>
  );
}
