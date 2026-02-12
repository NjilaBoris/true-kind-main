import React from "react";
import "./MenuBtn.css";

const MenuBtn = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`menu-toggle z-12! bg-dark-200! ${isOpen ? "opened" : "closed"}`}
      onClick={toggleMenu}
    >
      <div className="menu-toggle-icon">
        <div className="hamburger">
          <div className="menu-bar" data-position="top"></div>
          <div className="menu-bar" data-position="bottom"></div>
        </div>
      </div>
      <div className="menu-copy">
        <p>Menu</p>
      </div>
    </div>
  );
};

export default MenuBtn;
