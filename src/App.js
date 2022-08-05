import About from "./Components/About/About";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";
import Testimonial from "./Components/Testimonial/Testimonials";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default App;
