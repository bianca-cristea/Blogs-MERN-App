import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="text-4xl flex flex-col items-start bg-zinc-100 w-full">
        <h1 className="font-bold"> Hey! I am Bia</h1>
        <h2>Discover new blogs of technologies and trends.</h2>
      </div>
      <div className="my-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="w-full md:w-1/2">
          <img
            src="https://st2.depositphotos.com/3591429/6310/i/450/depositphotos_63107903-stock-photo-man-working-on-laptop.jpg"
            className="rounded w-full h-[30vh] md:h-[40vh] object-cover"
            alt="img"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Lorem ipsum</h1>
          <p className="mt-2 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            facilis esse impedit eveniet doloribus culpa?
          </p>
          <Link className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-all duration-300 text-white">
            Read blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
