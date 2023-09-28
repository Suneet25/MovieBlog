"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
// import { logEvent, analytics } from "@firebase/analytics";

const Card = ({ imageUrl, category, title, href,index }) => {
  let router = useRouter();
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <Image
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
        width={500}
        height={500}
      />

      <div className="p-4 bg-gray-200">
        <div className="text-xs text-gray-500 uppercase font-bold">
          {category}
        </div>
        <h2 className="text-xl mt-2 mb-4 font-semibold">{title}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
          onClick={() => {
            // console.log(index,"got clicked")
            // logEvent(analytics, `test firebase analytics_${index}`);
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
