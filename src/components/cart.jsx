import { useState } from "react";
import Model from "./model";

const Cart = () => {
  const [cart, setCart] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModel() {
    setIsModalOpen(true);
  }

  return (
    <>
      <div>
        <button onClick={openModel}>
          <span className="material-symbols-outlined text-3xl">
            shopping_cart
          </span>
        </button>
        <span>{cart}</span>
      </div>

      {isModalOpen && <Model closeModel={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Cart;
