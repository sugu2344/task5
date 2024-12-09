const LandingPage = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 p-5 bg-[#EFF7F6]">
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border-2 bg-white p-4">
          <img src="https://placehold.co/450x300" alt="Product" />
          <div className="text-center space-y-3 mt-3">
            <h1 className="font-bold text-2xl">Product-Title</h1>
            <p>Product-Price</p>
            <button className="border-2 p-2 rounded-xl hover:bg-black hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
