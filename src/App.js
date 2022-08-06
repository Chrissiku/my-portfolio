import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Testimonial from "./Components/Testimonial/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
