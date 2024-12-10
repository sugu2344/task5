const Model = ({ setShowModal, cartItems }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-xl relative">
        <h2 className="text-xl font-bold">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-3">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 py-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover"
                />
                <span className="text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        )}
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
