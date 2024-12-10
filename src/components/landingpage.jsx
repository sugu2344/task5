import { useEffect, useState } from "react";

const LandingPage = ({ addToCart }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log("Error in fetching:", error));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="flex flex-wrap gap-4 p-5 bg-[#EFF7F6]">
      {post.map((item) => (
        <div
          key={item.id}
          className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border-2 bg-white p-4 flex flex-col"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="flex flex-col justify-between flex-grow text-center space-y-3 mt-3">
            <h1 className="font-bold text-2xl">{item.title}</h1>
            <p className="text-lg font-medium">₹{item.price}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="border-2 p-2 rounded-xl hover:bg-black hover:text-white cursor-pointer mt-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
