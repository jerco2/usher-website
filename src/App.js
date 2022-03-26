import "./App.css";
import NavMenu from "./components/navmenu/NavMenu";
import Showcase from "./components/showcase/Showcase";
import About from "./components/about/About";
import Products from "./components/products/Products";
import { useState, useRef } from "react";
import { MenuTogglerContextProvider } from "./context/MenuTogglerContext";
import MobileMenu from "./components/navmenu/MobileMenu";

function App() {
  const [navChange, setNavChange] = useState(false);
  const product = useRef(null);

  const onScroll = () => {
    if (window.pageYOffset > 200) {
      setNavChange(true);
    } else {
      setNavChange(false);
    }
  };
  return (
    <MenuTogglerContextProvider>
      <div className={`overflow-x-hidden`} onWheel={onScroll}>
        <NavMenu
          product={product}
          navChange={navChange}
          setNavChange={setNavChange}
        />
        <MobileMenu product={product} setNavChange={setNavChange} />
        <Showcase />
        <About />
        <div ref={product}>
          <Products />
        </div>
      </div>
    </MenuTogglerContextProvider>
  );
}

export default App;
