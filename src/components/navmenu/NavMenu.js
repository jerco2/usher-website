import React, { useState } from "react";
import NavLink from "./NavLink";
import USHER_LOGO from "../../assets/usher/USHER_LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Nav.css";

function NavMenu() {
  const [showNav, setShownav] = useState(false);
  const toggleNav = () => setShownav(!showNav);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top`}
    >
      <div className={`container`}>
        <div className={`d-flex align-items-center`}>
          <img
            className={`img-fluid`}
            width="30"
            height="30"
            src={USHER_LOGO}
            alt=""
          />
          <a href="/" className={`navbar-brand ml-2`}>
            USHER
          </a>
        </div>

        <button
          className={`navbar-toggler text-light`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          onClick={toggleNav}
        >
          {!showNav ? <GiHamburgerMenu /> : <IoMdClose />}
        </button>

        <div className={`collapse navbar-collapse`} id="navmenu">
          <ul className={`navbar-nav ms-auto`}>
            <NavLink label="PRODUCTS" />
            <NavLink label="CLIENT" />
            <NavLink label="AWARDS" />
            <NavLink label="TEAM" />
            <NavLink label="CONTACT US" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
