// "use client";
import Card from "@/components/Card";
import config from "@/config";
import { fetchBlogs } from "@/helpers/fetch-blogs";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  // let [sort, setSort] = useState("");

  let blogs = await fetchBlogs(`&filters[Category][$eq]=Anime`);
  // console.log("SORT", sort);
  // let fetchBlogs = async (filter) => {
  //   let reqOption = {
  //     headers: {
  //       Authorization: `Bearer ${process.env.API_TOKEN}`,
  //     },
  //   };
  //   let request = await fetch(
  //     `${config.api}/api/blogs?populate=*&filters[Category][$eq]=Anime`&per_page=30`,
  //     reqOption
  //   );
  //   let response = await request.json();
  //   return response.data;
  // };
  return (
    <div className="row  max-w-7xl m-auto px-5 lg:px-0 py-10">
      <Suspense fallback={<Loading />}>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl text-gray-700">Animes</h1>
          {/* <div>
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
          </div> */}
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
