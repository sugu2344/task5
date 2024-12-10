const Model = ({ setShowModal }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-xl relative">
        <h2 className="text-xl font-bold">Item Added to Cart</h2>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Model;
