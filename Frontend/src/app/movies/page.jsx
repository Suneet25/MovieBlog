import BlogDetails from "@/components/BlogDetails";
import Card from "@/components/Card";
import config from "@/config";
import { fetchBlogs } from "@/helpers/fetch-blogs";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  let blogs = await fetchBlogs(`&filters[Category][$eq]=Movie`);

  console.log("MovieBlog", blogs);
  return (
    <div className="row  max-w-7xl m-auto py-10">
      <Suspense fallback={<Loading />}>
        <h1 className="font-semibold text-3xl text-gray-700">Movies</h1>
        <div className="mt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs?.map((blog, index) => {
            return (
              <Card
                index={index}
                category={blog.attributes.Category}
                title={blog.attributes.Title}
                href={`movies/${blog.attributes.slug}`}
                imageUrl={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
              />
            );
          })}
        </div>
      </Suspense>
    </div>
  );
}
