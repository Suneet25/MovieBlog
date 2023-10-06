import Image from "next/image";
import React from "react";
import AboutBanner from "..//../Assets/AboutBanner.webp";
import AboutSocials from "@/components/AboutSocials";
import { fetchBlogs } from "@/helpers/fetch-blogs";
import config from "@/config";

const About = async () => {
  let blogs = await fetchBlogs(`&filters[Category][$eq]=Anime`);
  let blogMovies = await fetchBlogs(`&filters[Category][$eq]=Movie`);

  return (
    <div className="max-w-7xl m-auto py-10 px-10 md:px-0 lg:px-0 ">
      <h1 className="font-semibold text-3xl text-gray-700">About</h1>
      <div className="mt-5 flex flex-col md:flex-row lg:flex-row gap-5">
        <div className="rounded-lg overflow-hidden shadow-lg py-10 px-10">
          <div className="rounded-lg overflow-hidden ">
            <Image
              src={AboutBanner}
              alt="aboutBanner"
              width={800}
              height={600}
            />
            <br />
            <hr />
            <br />
            <div>
              <i className="text-black text-center font-bold">
                “Movies can and do have a tremendous influence in shaping young
                lives in the realm of entertainment towards the ideals and
                objectives of normal adulthood”
              </i>
              <h2 className="mt-3 text-xl text-black text-center font-bold">
                Walt Disney
              </h2>
            </div>
            <div className="mt-5 ">
              <p className="text-gray-700">Greetings and salutations…</p>
              <p className="mt-10 text-gray-700">
                Welcome to Jason’s Movie Blog. As you guess….I’m Jason, the
                founder, CEO, and the movie critic enthusiast behind this blog.
              </p>
              <p className="mt-10 text-gray-700">COMING SOON (MORE TO COME) </p>
            </div>
            <div className="mt-5">
              <h1 className="text-sm  font-bold text-gray-800">Share this:</h1>
              <div>
                <AboutSocials />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] flex flex-col gap-3">
          <div className="shadow-lg rounded-lg py-10 px-8">
            <h1 className="text-xl mt-5 text-gray-700">Animes you can follow</h1>
            <div className="h-96  carousel carousel-vertical rounded-box mt-3">
              {blogs.map((blog) => (
                <div className="carousel-item h-full">
                  <Image
                    width={500}
                    height={500}
                    style={{ height: "400px", width: "400px" }}
                    key={blog.id}
                    src={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
                    alt="Burger"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="shadow-lg rounded-lg py-10 px-8">
            <h1 className="text-xl mt-5 text-gray-700">Movies you can follow</h1>
            <div className="h-96  carousel carousel-vertical rounded-box mt-3">
              {blogMovies.map((blog) => (
                <div className="carousel-item h-full">
                  <Image
                    width={500}
                    height={500}
                    style={{ height: "400px", width: "400px" }}
                    key={blog.id}
                    src={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
                    alt="Burger"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
