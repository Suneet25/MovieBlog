import BlogDetails from "@/components/BlogDetails";
import Card from "@/components/Card";
import config from "@/config";
import { fetchBlogs } from "@/components/helpers/fetch-blogs";
import { Suspense } from "react";
import Loading from "./Loading";

export default async function Home() {
  let blogs = await fetchBlogs(`&filters[Category][$eq]=Anime`);
  //  console.log("BLOGS",blogs[0].attributes.FeaturedImage.data.attributes.url);
  console.log(blogs[0]);
  return (
    <div className="row  max-w-7xl m-auto py-10">
      <Suspense fallback={<Loading />}>
        <h1 className="font-semibold text-3xl">Animes</h1>
        <div className="mt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3   ">
          {blogs?.map((blog) => {
            return (
              <Card
                category={blog.attributes.Category}
                title={blog.attributes.Title}
                href={`animes/${blog.attributes.slug}`}
                imageUrl={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
              />
            );
          })}
        </div>
      </Suspense>
    </div>
  );
}
