import { Link } from "react-router-dom";
import Navigation from "./NavMenu";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <a href="/" className="logo">
            <span>&lt;</span>&nbsp;Chris Siku&nbsp;<span>/&gt;</span>
          </a>
        </Link>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
