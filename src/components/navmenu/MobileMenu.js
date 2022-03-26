import React from "react";
import {
  useMenuToggler,
  useMenuTogglerUpdate,
} from "../../context/MenuTogglerContext";

function MobileMenu({ product, setNavChange }) {
  const showNav = useMenuToggler();
  const toggleNav = useMenuTogglerUpdate();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toggleNav();
    setNavChange(false);
  };

  const goToProduct = () => {
    window.scrollTo({ top: product.current.offsetTop, behavior: "smooth" });
    toggleNav();
    setNavChange(true);
  };

  return (
    <div
      className={`w-100 h-100 d-flex d-lg-none ${
        showNav ? "left-0" : "left-100"
      } transition-fast opacity-20  z-30 position-fixed flex-column justify-content-center align-items-center top-0 left-0`}
    >
      <div
        className={`d-flex flex-column align-items-center justify-content-center innerRing`}
      >
        <button
          className={`bg-none text-light border-0 h1 tracking-wider`}
          onClick={goToTop}
        >
          HOME
        </button>
        <button
          className={`bg-none text-light border-0 mt-2 h1 tracking-wider`}
          onClick={goToProduct}
        >
          PRODUCT
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
