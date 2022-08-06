import { useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "react-icons-kit";
import { linksArray, socialArray } from "./headerData";
import { thLarge } from "react-icons-kit/fa/thLarge";
import { close } from "react-icons-kit/fa/close";

const Header = () => {
  const navigationRef = useRef();
  const toggleNavbar = () => {
    navigationRef.current.classList.toggle("mobile-nav");
  };
  return (
    <>
      <header>
        <Link to="/">
          <span className="logo">Chris Siku</span>
        </Link>
        <nav ref={navigationRef}>
          <ul>
            {linksArray.map((menuItem) => (
              <Link to={menuItem.path} key={menuItem.id}>
                <li onClick={toggleNavbar}>
                  <i>{menuItem.icon}</i>
                  <span>{menuItem.menu}</span>
                </li>
              </Link>
            ))}
            {socialArray.map((socialItem) => (
              <li key={socialItem.id} onClick={toggleNavbar} className="social">
                <a href={socialItem.link} target="_blank" rel="noreferrer">
                  <i>{socialItem.icon}</i>
                </a>
                <a href={socialItem.link} target="_blank" rel="noreferrer">
                  {socialItem.network}
                </a>
              </li>
            ))}
            <div className="button">
              <a href="/" rel="noreferrer" className="btn cv">
                Download CV
              </a>
            </div>
          </ul>
          <button
            type="button"
            className="menu-icon"
            id="menu-icon close-navbar"
            onClick={toggleNavbar}
          >
            <Icon icon={close} size={20} />
          </button>
        </nav>

        <button
          type="button"
          className="menu-icon"
          id="menu-icon"
          onClick={toggleNavbar}
        >
          <Icon icon={thLarge} size={20} />
        </button>
      </header>
    </>
  );
};
export default Header;
