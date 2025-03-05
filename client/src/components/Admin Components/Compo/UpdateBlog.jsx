import React from "react";

const UpdateBlog = () => {
  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-semibold">Update blog</h1>
      <form action="" className="my-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="border-none outline-none p-4 bg-transparent text-3xl border-b border-zinc-400 font-semibold w-full"
        />
        <textarea
          type="text"
          placeholder="Description"
          className="border-none outline-none p-4 bg-transparent text-xl border-b border-zinc-400 font-semibold w-full"
        />
        <div>
          <input
            type="file"
            className="bg-zinc-500 rounded text-white"
            accept=".jpeg, .png, .jpg"
          />
        </div>
        <button className="w-[30%] bg-blue-600 text-xl text-white rounded px-4 py-2 shadow-xl hover:bg-blue-700 transition-all duration-200">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
