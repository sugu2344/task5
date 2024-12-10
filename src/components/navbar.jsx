import Cart from "./Cart";
import LandingPage from "./landingpage";
import { useState } from "react";
import Model from "./model";

const NavBar = () => {
  const [cart, setCart] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-between bg-[#D8CBC7] pt-3 pr-12 pb-3 pl-8 items-center">
        <h1>Shopping Cart</h1>
        <Cart cart={cart} setShowModal={setShowModal} />
      </div>
      <LandingPage setCart={setCart} setShowModal={setShowModal} />
      {showModal && <Model setShowModal={setShowModal} />}
    </>
  );
};

export default NavBar;
