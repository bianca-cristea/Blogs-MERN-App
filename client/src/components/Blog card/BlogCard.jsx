import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  return (
    <>
      <div className="w-full lg:w-4/6">
        <img src={item.img} alt="img" className="rounded object-cover w-4/6 " />
      </div>
      <div className="w-full lg:w-4/6">
        <h1 className="text-2xl font-semibold ">{item.title}</h1>
        <p className="mb-4">{item.description.slice(0, 170)}...</p>
        <Link className="bg-blue-600 px-4 py-2 hover:bg-blue-700 rounded transition-all duration-300 text-white">
          Read More
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
