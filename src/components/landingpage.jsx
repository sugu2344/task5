const LandingPage = () => {
  return (
    <>
      <div className="bg-[#F5F7DC] m-5 p-5 flex flex-row space-y-3 space-x-3">
        <div className="w-[20%] px-3 py-2 border-2 bg-white">
          <img src="https://placehold.co/450x300"></img>
          <div className="text-center space-y-3">
            <h1 className="font-bold text-2xl">Product-Title</h1>
            <p> product-Price</p>
            <p>Title</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
