import Cart from "./components/cart";
import Footer from "./components/footer";
import LandingPage from "./components/landingpage";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Cart />
      </div>
      <div>
        <LandingPage />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
