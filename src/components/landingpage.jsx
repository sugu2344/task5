import { useEffect, useState } from "react";

const LandingPage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log(post);
  }, [post]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.log("Error in fetching post", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-5 bg-[#EFF7F6]">
      {post.map((item) => (
        <div
          key={item.id}
          className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border-2 bg-white p-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="text-center space-y-3 mt-3">
            <h1 className="font-bold text-2xl">{item.title}</h1>
            <p className="text-lg font-medium">${item.price}</p>
            <button className="border-2 p-2 rounded-xl hover:bg-black hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
