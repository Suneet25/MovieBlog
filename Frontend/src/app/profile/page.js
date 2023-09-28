import dynamic from "next/dynamic";
let Profile = dynamic(() =>import("@/components/profile") );
import React from "react";

const page = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default page;
