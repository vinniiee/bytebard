"use client";
import React from "react";
import { Input } from "../ui/input";
import { search } from "@/actions/search";
import { useSearchParams } from "next/navigation";

const SearchBar = () => {
  const params = useSearchParams();
  return (
    <form action={search}>
      <Input
        name="term"
        defaultValue={params.get("term") || ""}
        placeholder="Search"
        className="max-w-md"
      />
    </form>
  );
};

export default SearchBar;
