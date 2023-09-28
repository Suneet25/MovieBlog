import BlogDetails from "@/components/BlogDetails";
import React from "react";
import { fetchBlogs } from "@/helpers/fetch-blogs";

const page = async (props) => {
  let blog = await fetchBlogs(`&filters[slug][$eq]=${props.params.slug}`);

  return <BlogDetails blog={blog[0]} />;
};

export default page;
