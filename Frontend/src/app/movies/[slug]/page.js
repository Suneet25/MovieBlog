import BlogDetails from "@/components/BlogDetails";
import React from "react";
import { fetchBlogs } from "@/components/helpers/fetch-blogs";

const page = async (props) => {
  let blog = await fetchBlogs(`&filters[slug][$eq]=interstellar`);
console.log("MOVIEBLOG",blog);
  return (
    <BlogDetails
      blog={blog[0]}
    />
  );
};

export default page;

