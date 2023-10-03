import { fetchBlogs } from "@/helpers/fetch-blogs";
import config from "@/config";
import Image from "next/image";
import React from "react";
import { movieBlogs } from "@/helpers/data";

const Home = async () => {
  let blogs = await fetchBlogs(`&filters[Category][$eq]=Anime`);
  let blogMovies = await fetchBlogs(`&filters[Category][$eq]=Movie`);

  return (
    <div className="max-w-7xl m-auto py-10 font-semibold  text-4xl lg:text-5xl text-center px-10">
      <h1>Top 5 Movie Blogs for Film Fans to Follow</h1>
      <div className="rounded-lg overflow-hidden mt-10  ">
        <img
          src={
            "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/02134600/Movie-Blogs-1.jpg"
          }
          width={1600}
          height={600}
        />
      </div>
      <div>
        <p className="text-left text-lg text-black mt-5">
          Movie fans, unite! Whether you’re a fan of blockbuster hits or indie
          films, there are a handful of top-rated movie blogs that can keep you
          in-the-know. Many of the blogs focus on headline news and casting
          reveals, but there are some niche blogs that focus on specific kinds
          of movies or family-specific reviews.
        </p>
      </div>
      <div className="mt-5">
        {movieBlogs?.map((data) => {
          return (
            <div key={data.id}>
              <h1 className="text-3xl mt-5">{data.heading}</h1>
              <div className="rounded-lg overflow-hidden mt-10">
                <img src={data.src} width={1600} height={600} />
              </div>
              <p className="text-lg text-black text-left">{data.content}</p>
            </div>
          );
        })}
      </div>
      <h1 className="text-3xl mt-5">Animes you can follow</h1>
      <div className="carousel rounded-box mt-5">
        <div className="carousel-item">
          {blogs.map((blog) => (
            <Image
              width={500}
              height={500}
              style={{ height: "400px", width: "400px" }}
              key={blog.id}
              src={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
              alt="Burger"
            />
          ))}
        </div>
      </div>
      <h1 className="text-3xl mt-5">Movies you can follow</h1>
      <div className="carousel rounded-box mt-5">
        <div className="carousel-item">
          {blogMovies.map((blog) => (
            <Image
              width={500}
              height={500}
              style={{ height: "400px", width: "400px" }}
              key={blog.id}
              src={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
              alt="Burger"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
