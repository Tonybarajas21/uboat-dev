import React from "react";
import "./style.css";

function Header() {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Boats and Bettys</a>
        </li>
        <li>
          <a class="#">Login</a>
          <a class="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;