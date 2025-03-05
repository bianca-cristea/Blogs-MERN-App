import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", to: "/admin-dashboard" },
    { name: "Add Blogs", to: "add-blogs" },
    { name: "Edit Blogs", to: "/admin-dashboard/edit-blogs" },
  ];
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Admin Page</h1>
      <hr className="my-4" />
      <div className="flex flex-col gap-4">
        {links.map((item, index) => (
          <div key={index}>
            <Link
              to={item.to}
              className="text-md hover:scale-105 transition-all duration-200"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button className="bg-black text-white my-4 px-4 py-2 w-[100%] rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
