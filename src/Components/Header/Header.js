import React, { useRef } from 'react';

// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';
import Icon from 'react-icons-kit';
import { thLarge } from 'react-icons-kit/fa/thLarge';
import { close } from 'react-icons-kit/fa/close';
import { linksArray, socialArray } from './headerData';
import Resume from '../../Resume/Christian_Siku_Resume.pdf';

const Header = () => {
  const navigationRef = useRef();
  const toggleNavbar = () => {
    navigationRef.current.classList.toggle('mobile-nav');
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
                spy
                smooth
                offset={-50}
                duration={10}
                activeClass="active"
              >
                <li onClick={toggleNavbar} aria-hidden="true">
                  <i>{menuItem.icon}</i>
                  <span>{menuItem.menu}</span>
                </li>
              </Link>
            ))}
            {socialArray.map((socialItem) => (
              <li key={socialItem.id} onClick={toggleNavbar} className="social" aria-hidden="true">
                <a href={socialItem.link} target="_blank" rel="noreferrer">
                  <i>{socialItem.icon}</i>
                </a>
                <a href={socialItem.link} target="_blank" rel="noreferrer">
                  {socialItem.network}
                </a>
              </li>
            ))}
            <div className="button">
              <a href={Resume} rel="noreferrer" className="btn cv" target="_blank">
                My Resume
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
