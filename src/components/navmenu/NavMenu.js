import React from "react";
import NavLink from "./NavLink";
import USHER_LOGO from "../../assets/usher/USHER_LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {
  useMenuToggler,
  useMenuTogglerUpdate,
} from "../../context/MenuTogglerContext";
import "./Nav.css";

function NavMenu({ product, navChange, setNavChange }) {
  const showNav = useMenuToggler();
  const toggleNav = useMenuTogglerUpdate();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setNavChange(false);
  };

  const goToElement = () => {
    window.scrollTo({ top: product.current.offsetTop, behavior: "smooth" });
    setNavChange(true);
  };

  return (
    <nav
      className={`${
        navChange ? "bg-usher-blue" : "bg-none"
      } w-100 d-flex flex-row transition text-light align-items-center 
      py-3 z-10 fixed-top`}
    >
      <div
        className={`container d-flex w-100 justify-content-between 
        align-items-center`}
      >
        <div // ------- Button for Scroll to Top
          className={`d-flex align-items-center cursor-pointer`}
          onClick={goToTop}
        >
          <img // -------- Company Logo
            className={`img-fluid`}
            width="30"
            height="30"
            src={USHER_LOGO}
            alt=""
          />
          <span className={`navbar-brand ml-2`}>USHER</span>
        </div>

        <button
          className={`d-lg-none btn-toggler margin-top-n10`}
          onClick={toggleNav}
        >
          {!showNav ? <GiHamburgerMenu /> : <IoMdClose />}
        </button>

        <div className={`d-none d-lg-flex align-items-center`}>
          <NavLink onClick={goToElement} label="PRODUCTS" />
          <NavLink label="CLIENT" />
          <NavLink label="AWARDS" />
          <NavLink label="TEAM" />
          <NavLink label="CONTACT US" />
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
