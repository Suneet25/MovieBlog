"use client";
import Image from "next/image";
import React, { useState } from "react";

import config from "@/config";

import BlogDetailsCard from "./BlogDetailsCard";

import ImageSkeleton from "./ImageSkeleton";
import {
  FacebookShare,
  TelegramShare,
  TwitterShare,
  WhatsappShare,
} from "./SocialShare";
let Genres = ["Scifi", "Adventure", "Action"];

const BlogDetails = ({ blog }) => {
  let blogCardData = [
    { id: 1, main: "Budget", attrib: blog?.attributes.Budget },
    { id: 2, main: "Status", attrib: blog?.attributes.Status },
    { id: 3, main: "Runtime", attrib: blog?.attributes.Runtime },
    { id: 4, main: "Release Date", attrib: blog?.attributes.ReleaseDate },
    { id: 5, main: "Revenue", attrib: blog?.attributes.Revenue },
    {
      id: 6,
      main: "Original Language",
      attrib: blog?.attributes.OriginalLanguage,
    },
    { id: 7, main: "Rating", attrib: blog?.attributes.Rating },
    { id: 8, main: "Country", attrib: blog?.attributes.Country },
  ];
  let [loaded, setLoaded] = useState(false);
  return (
    <div className="max-w-7xl m-auto  py-5 px-5 lg:px-0">
      <h1 className="font-semibold text-3xl"></h1>
      <div className="flex flex-wrap gap-x-40 mt-5 ">
        <div className="h-90 w-90 rounded-lg overflow-hidden">
          <div>
            {!loaded && <ImageSkeleton />}
            <Image
              src={`${config.api}${blog?.attributes.Thumbnail.data.attributes.url}`}
              layout="fixed"
              width={400}
              height={600}
              alt="Thumbnail Image"
              style={{
                width: "400px",
                height: "600px",
                opacity: loaded ? "1" : "0",
              }}
              loading="lazy"
              onLoad={(e) => setLoaded(true)}
            />
          </div>
        </div>
        <div className="w-[600px]">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-4xl text-gray-700">
              {blog?.attributes.Title}
            </h1>
            <div className="flex justify-center items-center gap-2">
              <div>
                <FacebookShare
                  url={`http://localhost:3000/animes/${blog?.attributes.slug}`}
                  title={blog?.attributes.Title}
                />
              </div>
              <div>
                <TelegramShare
                  url={`http://localhost:3000/animes/${blog?.attributes.slug}`}
                  title={blog?.attributes.Title}
                />
              </div>
              <div>
                <TwitterShare
                  url={`http://localhost:3000/animes/${blog?.attributes.slug}`}
                  title={blog?.attributes.Title}
                />
              </div>
              <div>
                <WhatsappShare
                  url={`http://localhost:3000/animes/${blog?.attributes.slug}`}
                  title={blog?.attributes.Title}
                />
              </div>
            </div>
          </div>

          {/* Genre */}
          <div className="mt-3">
            <h2 className="font-semibold text-orange-700">Genres</h2>
            <div className="flex gap-2 mt-3 ">
              {Genres?.map((genre, index) => {
                return (
                  <div
                    key={index}
                    className="bg-orange-400 py-1 px-2 rounded-lg text-white font-bold"
                  >
                    {genre}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Overview */}
          <div className="mt-5">
            <h2 className="font-semibold text-orange-700">Overview</h2>
            <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: blog?.attributes.Content }}
            ></div>
          </div>

          {/* About */}
          <div className="mt-5">
            <h2 className="font-semibold text-orange-700">About</h2>
            <p className="mt-3">{blog?.attributes.Summury}</p>
          </div>
          {/* Others */}
          <div className="mt-5">
            <h2 className="font-semibold">Others</h2>
            <div className="mt-5 grid lg:grid-cols-2 grid-cols-1 gap-3 ">
              {blogCardData.map((blog) => (
                <BlogDetailsCard
                  key={blog.id}
                  main={blog.main}
                  attrib={blog.attrib}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Similar Animes */}
      {/* <SimilarMovieCard /> */}
    </div>
  );
};

export default BlogDetails;
