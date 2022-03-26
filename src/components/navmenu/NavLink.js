import React from "react";

export default function NavLink({ label, onClick }) {
  return (
    <li className={"cursor-pointer nav-item list-style-none"} onClick={onClick}>
      <span className={`nav-link text-white`}>{label}</span>
    </li>
  );
}
