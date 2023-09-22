"use client";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
let Genres = ["Scifi", "Adventure", "Action"];

const BlogDetails = () => {
  return (
    <div className="max-w-7xl m-auto mt-10">
      <h1 className="font-semibold text-3xl">Blog Details Page</h1>
      <div className="flex flex-wrap gap-x-40 mt-5">
        <div className="h-90 w-90 rounded-lg overflow-hidden">
          <Image
            src={"http://127.0.0.1:1337/uploads/small_image3_e273a1da95.webp"}
            width={400}
            height={400}
          />
        </div>
        <div className="w-[600px]">
          <h1 className="font-bold text-4xl">Interstellar</h1>

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
            <p className="mt-3">
        Barbie and Ken are having the time of their lives in the colorful and
        seemingly perfect world of Barbie Land. However, when they get a chance
        to go to the real world, they soon discover the joys and perils of
        living among humans
      </p>
          </div>

          {/* About */}
          <div className="mt-5">
          <h2 className="font-semibold">About</h2>
            <p className="mt-3">
        Barbie and Ken are having the time of their lives in the colorful and
        seemingly perfect world of Barbie Land. However, when they get a chance
        to go to the real world, they soon discover the joys and perils of
        living among humans
      </p>
          </div>
          {/* Others */}
          <div className="mt-5">

          
          <h2 className="font-semibold">Others</h2>
     <div>
        
     </div>
      </div> 
        </div>
      </div>
    
    </div>
  );
};

export default BlogDetails;
