import { useParams } from "react-router-dom";

const Description = () => {
  const { id } = useParams();
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

  const blog = data[id];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">{blog.title}</h1>
      <img className="mt-4" src={blog.img} alt="img" />
      <p className="mt-4">{blog.description}</p>
    </div>
  );
};

export default Description;
