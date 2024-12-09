import { useEffect, useState } from "react";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="flex flex-wrap gap-4 p-5 bg-[#EFF7F6]">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border-2 bg-white p-4"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain"
          />
          <div className="text-center space-y-3 mt-3">
            <h1 className="font-bold text-2xl">{product.title}</h1>
            <p className="text-lg">${product.price.toFixed(2)}</p>
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
