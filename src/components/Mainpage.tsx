import About from "./About";
import Facts from "./Facts";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Process from "./Process";
import Services from "./Services";
import Textimonial from "./Textimonial";

const MainPage = () => {
    return (
      <>
        <Navbar />
        <Home />
        <Process />
        <Textimonial />
        <Services />
        <Facts />
        <About />
        <Pricing />
        <Footer />
      </>
    );
  }

  export default MainPage;