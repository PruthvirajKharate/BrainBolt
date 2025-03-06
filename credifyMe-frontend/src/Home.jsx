import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./components/Footer";
import MetaMaskSignup from "./MetaMaskSignup";
import "bootstrap/dist/css/bootstrap.min.css"; // CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // JS for Bootstrap components
// Import your component
import "bootstrap/dist/css/bootstrap.min.css?url";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <AboutUs />
      <WhyChooseUs />
      <Footer />
      
    </div>
  );
}

export default Home;
