import React from "react";
import BlogCard from "../Blog card/BlogCard";
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
const LikedBlogs = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">All blogs</h1>
      <div className="flex flex-col gap-8 lg:gap-4">
        {data &&
          data.map((item, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
              <BlogCard item={item} />
            </div>
          ))}
      </div>
      ;
    </>
  );
};

export default LikedBlogs;
