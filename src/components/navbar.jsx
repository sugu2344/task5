import Cart from "./cart";
import LandingPage from "./landingpage";
import { useState } from "react";
import Model from "./model";

const NavBar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <>
      <div className="flex justify-between bg-[#D8CBC7] pt-3 pr-12 pb-3 pl-8 items-center">
        <h1>Shopping Cart</h1>
        <Cart cartItems={cartItems} setShowModal={setShowModal} />
      </div>
      <LandingPage addToCart={addToCart} />
      {showModal && <Model setShowModal={setShowModal} cartItems={cartItems} />}
    </>
  );
};

export default NavBar;
