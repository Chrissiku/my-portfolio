import React from "react";
import { useRef } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import Icon from "react-icons-kit";
import { linksArray, socialArray } from "./headerData";
import { thLarge } from "react-icons-kit/fa/thLarge";
import { close } from "react-icons-kit/fa/close";

const Header = ({ menu }) => {
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
              <Link
                key={menuItem.id}
                to={menuItem.component}
                spy={true}
                smooth={true}
                offset={-50}
                duration={10}
                activeClass="active"
              >
                <li onClick={toggleNavbar} ref={menu}>
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
