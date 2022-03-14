import React from "react";

export default function NavLink({ label }) {
  return (
    <li className={"nav-item"}>
      <a href="/" className={`nav-link`}>
        {label}
      </a>
    </li>
  );
}
