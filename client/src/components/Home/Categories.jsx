import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { name: "DSA", link: "/cat/dsa", bg: "bg-green-200" },
    { name: "MERN Stack", link: "/cat/mern-stack", bg: "bg-blue-200" },
    { name: "Next JS", link: "/cat/next-js", bg: "bg-orange-200" },
    {
      name: "Trending Topics",
      link: "/cat/trending-topics",
      bg: "bg-yellow-200",
    },
  ];
  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((items, index) => (
          <Link
            to={items.link}
            key={index}
            className={`px-4 py-2 text-center h-full text-normal md:text-xl font-semibold ${items.bg} rounded`}
          >
            {items.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
