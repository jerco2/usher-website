import React, { useState, useContext } from "react";

const MenuTogglerContext = React.createContext();
const MenuTogglerUpdateContext = React.createContext();

export function useMenuToggler() {
  return useContext(MenuTogglerContext);
}
export function useMenuTogglerUpdate() {
  return useContext(MenuTogglerUpdateContext);
}

export function MenuTogglerContextProvider({ children }) {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav((prevConfirmation) => !prevConfirmation);
  }

  return (
    <MenuTogglerContext.Provider value={showNav}>
      <MenuTogglerUpdateContext.Provider value={toggleNav}>
        {children}
      </MenuTogglerUpdateContext.Provider>
    </MenuTogglerContext.Provider>
  );
}
