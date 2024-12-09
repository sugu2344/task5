import { useState } from "react";

const Cart = () => {
  const [cart, setcart] = useState(0);
  return (
    <>
      <div>
        <span className="material-symbols-outlined text-3xl">
          shopping_cart
        </span>
        <span>{cart}</span>
      </div>
    </>
  );
};

export default Cart;
