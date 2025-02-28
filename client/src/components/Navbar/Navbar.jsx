import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [MobileNav, setMobileNav] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "All Blogs", to: "/all-blogs" },
    { name: "Profile", to: "/profile" },
    { name: "Login", to: "/login" },
  ];
  return (
    <nav className="flex relative items-center justify-between py-4 border-b border-zinc-200">
      <div className="w-3/6 brandName">
        <Link to="/" className="text-xl font-bold">
          TCM Blogger
        </Link>
      </div>
      <div className="w-4/6 hidden lg:flex items-center justify-end">
        {links.map((items, index) => (
          <Link
            className="ms-4 hover:text-blue-500 transition-all duration-300"
            key={index}
            to={items.to}
          >
            {items.name}
          </Link>
        ))}
        <Link
          to="/signup"
          className="ms-4 bg-black hover:bg-blue-600 rounded px-4 py-2 text-zinc-100"
        >
          Signup
        </Link>
      </div>
      <div className="w-3/6 flex lg:hidden items-center justify-end">
        <button className="text-4xl" onClick={() => setMobileNav(!MobileNav)}>
          <IoReorderThreeSharp />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 nav-bg h-screen w-full backdrop-blur-sm p-8 ${
          MobileNav ? "translate-y-[0%] flex flex-col" : "translate-y-[-100%]"
        } transition-all duration-300`}
      >
        <div className="width-full flex justify-end">
          <button
            className={` ${MobileNav ? "block" : "hidden"} text-2xl`}
            onClick={() => setMobileNav(!MobileNav)}
          >
            <IoMdClose />
          </button>
        </div>
        <div className="h-[100%] flex flex-col items-center justify-center">
          {links.map((items, index) => (
            <Link
              className="mt-4 text-3xl hover:text-blue-500 transition-all duration-300"
              key={index}
              to={items.to}
            >
              {items.name}
            </Link>
          ))}
          <Link
            to="/signup"
            className="mt-4 text-3xl bg-black hover:bg-blue-600 transition-all duration-200 rounded px-4 py-2 text-zinc-100"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
