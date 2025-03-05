import React from "react";
import { Link } from "react-router-dom";

const EditBlogs = () => {
  const data = [
    {
      img: "https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png",
      title: "Blog Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDJKa2bZtTe0MQdpO3yRbuuF1hM1JcNUbIw&s",
      title: "Blog Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      img: "https://st2.depositphotos.com/1420973/6409/i/450/depositphotos_64095317-stock-photo-blog-concept-cloud-chart-print.jpg",
      title: "Blog Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
  ];
  return (
    <div className="p-4 h-screen">
      <h1>Edit Blog</h1>
      <div className="grid grid-cols-3 gap-8 lg:gap-4 my-4">
        {data &&
          data.map((item, idx) => (
            <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center">
              <div className="w-full lg:w-4/6">
                <img
                  src={item.img}
                  alt="img"
                  className="rounded object-cover w-4/6 "
                />
              </div>
              <div className="mt-4">
                <h1 className="text-2xl font-semibold">{item.title}</h1>
                <p className="mb-4">{item.description.slice(0, 170)}...</p>
              </div>
              <div className="w-[100%] flex items-center justify-between gap-4">
                <Link
                  to="/admin-dashboard/edit-blogs/update-blog/:id"
                  className="bg-blue-600 w-[100%] text-center text-white rounded px-4 py-2"
                >
                  Edit
                </Link>
                <button className="bg-red-600 w-[100%] text-white rounded px-4 py-2">
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EditBlogs;
