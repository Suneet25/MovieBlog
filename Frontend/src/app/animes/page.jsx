"use client";
import Card from "@/components/Card";
import config from "@/config";
import { fetchBlogs } from "@/helpers/fetch-blogs";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  let [sort, setSort] = useState("");
  let [blogs, setBlogs] = useState([]);

  let getBlogs = async () => {
    try {
      let ans = await fetchBlogs(`&filters[Category][$eq]=Anime`);

      setBlogs(ans);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (sort === "AtoZ") {
    blogs = blogs.sort((a, b) => {
      const titleA = a.attributes.Title.toUpperCase(); // Convert titles to uppercase for case-insensitive comparison
      const titleB = b.attributes.Title.toUpperCase();

      if (titleA < titleB) {
        return -1; // Swap positions if titleA should come after titleB
      } else if (titleA > titleB) {
        return 1; // Keep positions if titleA should come before titleB
      } else {
        return 0; // Titles are equal, no change in position
      }
    });
  } else if (sort === "ZtoA") {
    blogs = blogs.sort((a, b) => {
      const titleA = a.attributes.Title.toUpperCase(); // Convert titles to uppercase for case-insensitive comparison
      const titleB = b.attributes.Title.toUpperCase();

      if (titleA < titleB) {
        return 1; // Keep positions if titleA should come before titleB
      } else if (titleA > titleB) {
        return -1; // Swap positions if titleA should come after titleB
      } else {
        return 0; // Titles are equal, no change in position
      }
    });
  }
  useEffect(() => {
    getBlogs();
  }, [sort]);
  return (
    <div className="row  max-w-7xl m-auto px-5 lg:px-0 py-10">
      <Suspense fallback={<Loading />}>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl text-gray-700">Animes</h1>
          <div>
            <select
              className="bg-amber-50   text-black font-semibold"
              onChange={(e) => setSort(e.target.value)}
            >
              <option disabled defaultValue={"Sort"}>
                Sort alphabaticall
              </option>
              <option value="AtoZ">A-Z</option>
              <option value="ZtoA">Z-A</option>
            </select>
          </div>
        </div>
        <div className="mt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs?.map((blog, index) => {
            return (
              <Card
                key={index}
                index={index}
                category={blog.attributes.Category}
                title={blog.attributes.Title}
                href={`animes/${blog.attributes.slug}`}
                summury={blog.attributes.Summury}
                imageUrl={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
              />
            );
          })}
        </div>
      </Suspense>
    </div>
  );
}
