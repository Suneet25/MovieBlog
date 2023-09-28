"use client";
import Image from "next/image";
import React from "react";

import config from "@/config";
let Genres = ["Scifi", "Adventure", "Action"];

const BlogDetails = ({ blog }) => {
  return (
    <div className="max-w-7xl m-auto  py-5 px-5 lg:px-0">
      <h1 className="font-semibold text-3xl"></h1>
      <div className="flex flex-wrap gap-x-40 mt-5 ">
        <div className="h-90 w-90 rounded-lg overflow-hidden">
          <Image
            src={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
            layout="fixed"
            width={500}
            height={400}
            style={{ width: "400px", height: "600px" }}
          />
        </div>
        <div className="w-[600px]">
          <h1 className="font-bold text-4xl">{blog.attributes.Title}</h1>

          {/* Genre */}
          <div className="mt-3">
            <h2 className="font-semibold">Genres</h2>
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
            <h2 className="font-semibold">Overview</h2>
            <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: blog.attributes.Content }}
            ></div>
          </div>

          {/* About */}
          <div className="mt-5">
            <h2 className="font-semibold">About</h2>
            <p className="mt-3">{blog.attributes.Summury}</p>
          </div>
          {/* Others */}
          <div className="mt-5">
            <h2 className="font-semibold">Others</h2>
            <div className="mt-5 grid lg:grid-cols-2 grid-cols-1 gap-3 ">
              <div className="flex items-center justify-between shadow-lg px-2 py-2 rounded-lg">
                <p className="text-teal-500 font-semibold">Budget :-</p>

                <p className="text-gray-700">{blog.attributes.Budget}</p>
              </div>
              <div className="flex items-center justify-between shadow-lg px-2 py-2 rounded-lg">
                <p className="text-teal-500 font-semibold">Status :-</p>
                <p className="text-gray-700">{blog.attributes.Status}</p>
              </div>
              <div className="flex items-center justify-between shadow-lg px-2 py-2 rounded-lg">
                <p className="text-teal-500 font-semibold">Runtime :-</p>
                <p className="text-gray-700">{blog.attributes.Runtime}</p>
              </div>
              <div className="flex items-center justify-between shadow-lg px-2 py-2 rounded-lg">
                <p className="text-teal-500 font-semibold">Release Date :-</p>
                <p className="text-gray-700">{blog.attributes.ReleaseDate}</p>
              </div>
              <div className="flex items-center justify-between shadow-lg px-2 py-2 rounded-lg">
                <p className="text-teal-500 font-semibold">Revenue :-</p>
                <p className="text-gray-700">{blog.attributes.Revenue}</p>
              </div>
              <div className="flex items-center justify-between shadow-lg px-2 py-2 rounded-lg">
                <p className="text-teal-500 font-semibold">
                  Original Language :-
                </p>
                <p className="text-gray-700">
                  {blog.attributes.OriginalLanguage}
                </p>
              </div>
              <div className="flex items-center justify-between shadow-lg px-2 py-2 rounded-lg">
                <p className="text-teal-500 font-semibold">Rating :-</p>
                <p className="text-gray-700">{blog.attributes.Rating}</p>
              </div>
              <div className="flex items-center justify-between shadow-lg px-2 py-2 rounded-lg">
                <p className="text-teal-500 font-semibold">Country :-</p>
                <p className="text-gray-700">{blog.attributes.Country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
