import config from "@/config";
import { fetchBlogs } from "@/helpers/fetch-blogs";
import Image from "next/image";
import React from "react";

const SimilarMovieCard = async () => {
  let blogs = await fetchBlogs(`&filters[Category][$eq]=Anime`);

  return (
    <div class="max-w-7xl m-auto bg-white p-4 rounded-lg shadow-md flex flex-row flex-wrap gap-4 items-center content-center">
      {blogs?.map((blog) => (
        <div
          key={blog.id}
          class="w-44 h-44   overflow-hidden rounded-lg transition-transform hover:scale-110"
        >
          <Image
            layout="fixed"
            width={500}
            height={400}
            alt="Blog Image"
            style={{ width: "10rem", height: "10rem" }}
            src={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
          />
        </div>
      ))}
    </div>
  );
};

export default SimilarMovieCard;
