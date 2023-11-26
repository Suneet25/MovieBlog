import React from "react";

const BlogDetailsCard = ({ main, attrib }) => {
  return (
    <div className="flex items-center justify-between shadow-lg px-2 py-2 rounded-lg">
      <p className="text-teal-500 font-semibold">{main} :-</p>
      <p className="text-gray-700">{attrib}</p>
    </div>
  );
};

export default BlogDetailsCard;
