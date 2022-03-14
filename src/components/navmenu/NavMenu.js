import React from "react";
import NavLink from "./NavLink";
import USHER_LOGO from "../../assets/usher/USHER_LOGO.png";
import "./Nav.css";

function NavMenu() {
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
          className={`navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className={`navbar-toggler-icon`}></span>
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
