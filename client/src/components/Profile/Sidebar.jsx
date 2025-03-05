import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", to: "/profile" },
    { name: "Favourites", to: "/profile/favourites" },
    { name: "Liked blogs", to: "/profile/liked-blogs" },
  ];

  return (
    <div className="w-[100%] border-r flex flex-col gap-4 pr-4">
      {sidebarLinks.map((item, idx) => (
        <Link to={item.to} key={idx} className="hover:font-semibold">
          {item.name}
        </Link>
      ))}
      <button className="bg-zinc-900 rounded text-white py-2 w-[100%] text-center hover:bg-zinc-800 transition-all duration-300 mr-4">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
