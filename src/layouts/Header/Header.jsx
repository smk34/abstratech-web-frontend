import React, { useState } from "react";
import Logo from "../../assets/logo.jpeg";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home"); // Default active tab
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setMenuOpen(false); // Close the menu when a tab is clicked
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle menu open/close
  };

  return (
    <header>
      <nav className="navbar sticky-top">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="tab">
          <ul className="tab-list desktop">
            <li
              className={`tab-items ${activeTab === "Home" ? "active" : ""}`}
              onClick={() => handleTabClick("HOME")}
            >
              Home
            </li>
            <li
              className={`tab-items ${
                activeTab === "Portfolio" ? "active" : ""
              }`}
              onClick={() => handleTabClick("PORTFOLIO")}
            >
              Portfolio
            </li>
            <li
              className={`tab-items ${
                activeTab === "Services" ? "active" : ""
              }`}
              onClick={() => handleTabClick("SERVICES")}
            >
              Services
            </li>
            <li
              className={`tab-items ${activeTab === "Contact" ? "active" : ""}`}
              onClick={() => handleTabClick("CONTACT")}
            >
              Contact
            </li>
            <li className="tab-items black">MENU</li>
          </ul>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          &times; {/* Close icon */}
        </div>
        <ul className="tab-list">
          {["HOME", "PORTFOLIO", "SERVICES", "CONTACT"].map((tab) => (
            <li
              key={tab}
              className={`tab-items ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
