import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode();
  return (
    <nav className="navbar">
      <NavLink to="/" activeClassName="homeLinkHover">
        <h1>Crypto Tracker</h1>
      </NavLink>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
