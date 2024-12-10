const Cart = ({ cart, setShowModal }) => {
  return (
    <div className="flex items-center gap-2" onClick={() => setShowModal(true)}>
      <span className="material-symbols-outlined text-3xl cursor-pointer">
        shopping_cart
      </span>
      <span className="text-xl font-bold">{cart}</span>
    </div>
  );
};

export default Cart;
