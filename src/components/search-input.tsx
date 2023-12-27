"use client";
import { Input } from "@nextui-org/react";

import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export default function SearchInput() {
  const searchParams = useSearchParams();
  return (
    <form action={actions.search} className="w-full">
      <Input
        placeholder="Search Post/Topic"
        name="term"
        defaultValue={searchParams.get("term") || ""}
      />
    </form>
  );
}
