import React from "react";
import Logo from "../images/Logo.svg";
import { useState } from "react";

export default function Nav() {
  const [linkOpen, setLinkOpen] = useState(false);

  const toggleMenu = () => {
    setLinkOpen(!linkOpen);
  };

  return (
    <nav className={`navbar ${linkOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={Logo} alt="logo" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${linkOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservation</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
}
