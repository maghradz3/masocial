import PostList from "@/components/posts/post-list";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";
import { fetchTopPost } from "@/db/queries/posts";
import MotionDivWrapper from "@/components/framer-divs/top-posts";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-4 gap-4 p-4">
      <div className="border dark:border-slate-600 shadow py-3 px-2 rounded-md ">
        <MotionDivWrapper direction="right" deley={0.4}>
          <TopicCreateForm />
          <Divider className="my-2" />
          <h3 className="text-lg">Topics</h3>
          <TopicList />
        </MotionDivWrapper>
      </div>

      <div className="col-span-3">
        <MotionDivWrapper direction="up" deley={0.2}>
          <h1 className="text-2xl m-2 font-bold text-slate-200">
            Top
            <span className="text-purple-800"> Posts</span>
          </h1>
          <PostList fetchData={fetchTopPost} />
        </MotionDivWrapper>
      </div>
    </div>
  );
}
