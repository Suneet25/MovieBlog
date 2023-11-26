"use client";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import { logEvent } from "@/app/firebase";
import Loading from "@/app/animes/loading";
import ImageSkeleton from "./ImageSkeleton";

const Card = ({ imageUrl, category, title, href, summury }) => {
  let [loaded, setLoaded] = useState(false);

  let router = useRouter();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-48 object-cover">
        {!loaded && <ImageSkeleton />}
        <Image
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          loading="lazy"
          onLoad={(e) => setLoaded(true)}
          style={{ opacity: loaded ? "1" : "0" }}
        />
      </div>
      <div className="p-4 bg-gray-200">
        <div className="text-xs text-orange-700 uppercase font-bold">
          {category}
        </div>
        <h2 className="text-xl mt-2 mb-2 font-semibold text-gray-700">
          {title}
        </h2>
        <p className="text-gray-600 line-clamp-3 ... mb-2">{summury}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
          onClick={() => {
            logEvent(`test firebase analytics_${title}`);
            router.push(href);
          }}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;
