import React from "react";

const ImageSkeleton = () => {
  return (
    <div
      className="  flex justify-center items-center h-40 "
      // style={{ border: "2px solid red" }}
    >
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default ImageSkeleton;
