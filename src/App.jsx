import Footer from "./components/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NewArival from "./components/newArival/NewArival";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <NewArival />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
