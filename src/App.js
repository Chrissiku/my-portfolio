import About from "./Components/About/About";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Work />
    </div>
  );
};

export default App;
