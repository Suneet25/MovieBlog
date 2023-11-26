import React from "react";
import { movieBlogs } from "@/helpers/data";
import Image from "next/image";
import Image0 from "../Assets/LandingPage/Image0.jpg";
import { fetchLandingPageContent } from "@/helpers/fetch-blogs";
import config from "@/config";

const Home = async () => {
  let blogs = await fetchLandingPageContent();

  return (
    <div className="max-w-7xl m-auto py-10 font-semibold  text-4xl lg:text-5xl text-center px-10  lg:px-0">
      <h1 className="text-gray-700">
        Top 5 Movie Blogs for Film Fans to Follow
      </h1>
      <div className="rounded-lg overflow-hidden mt-10  ">
        <Image
          src={Image0}
          width={1600}
          height={500}
          objectFit="center"
          alt="Banner"
          priority
        />
      </div>
      <div>
        <p className="text-left text-lg text-black mt-3">
          Movie fans, unite! Whether you’re a fan of blockbuster hits or indie
          films, there are a handful of top-rated movie blogs that can keep you
          in-the-know. Many of the blogs focus on headline news and casting
          reveals, but there are some niche blogs that focus on specific kinds
          of movies or family-specific reviews.
        </p>
      </div>
      <div className="mt-5">
        {blogs?.map((data) => {
          return (
            <div key={data.id}>
              <h1 className="text-3xl mt-5 text-orange-700">
                {data.id}.{data.attributes.Heading}
              </h1>
              <div className="rounded-lg overflow-hidden mt-10">
                <Image
                  src={`${config.api}${data.attributes.Image.data.attributes.url}`}
                  width={1600}
                  height={500}
                  alt="LandingPage Image"
                  // loading="lazy"
                />
              </div>
              <p className="text-lg text-gray-600 text-left mt-3">
                {data.attributes.Content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
