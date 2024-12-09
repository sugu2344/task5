import Cart from "./cart";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between bg-[#D8CBC7] pt-3 pr-12 pb-3 pl-8 items-center">
        <h1>Shopping Cart</h1>
        <Cart />
      </div>
    </>
  );
};

export default NavBar;
