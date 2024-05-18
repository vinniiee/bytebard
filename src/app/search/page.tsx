import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/lib/queries/posts";
import { redirect } from "next/navigation";
import React from "react";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { term: string };
}) => {
  const term = searchParams.term;
  if (!term) {
    redirect("/topics");
  }
  return <div className="flex flex-col gap-8">
    <h3 className=" text-3xl">Search Results for <span className="font-bold">&quot;{term}&quot;</span></h3>
    <PostList fetchPosts={() => fetchPostsBySearchTerm(term)} />
  </div>;
};

export default SearchPage;
