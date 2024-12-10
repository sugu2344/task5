const Cart = ({ cart }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-3xl">shopping_cart</span>
      <span className="text-xl font-bold">{cart}</span>
    </div>
  );
};

export default Cart;
