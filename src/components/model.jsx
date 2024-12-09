const Model = ({ closeModel }) => {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="flex-grow bg-black bg-opacity-50"
        onClick={closeModel}
      ></div>

      <div className="w-80 sm:w-96 bg-white h-full shadow-lg transition-transform transform translate-x-0 mt-16  mr-4 sm:mr-8">
        <button
          onClick={closeModel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-4">Your Cart</h1>
          <p>Here is the content of your cart!</p>
        </div>
      </div>
    </div>
  );
};

export default Model;
