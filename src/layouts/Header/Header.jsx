import { useState } from "react";
// import Logo from "../../assets/logo.jpeg";
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
          {/* <img src={Logo} alt="logo" /> */}
          <h1>Abstertek</h1>
        </div>
        <div className="tab">
          <ul className="tab-list desktop">
            <li
              className={`tab-items ${activeTab === "Home" ? "active" : ""}`}
              onClick={() => handleTabClick("Home")}
            >
              Home
            </li>
            <li
              className={`tab-items ${
                activeTab === "Portfolio" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Portfolio")}
            >
              Portfolio
            </li>
            <li
              className={`tab-items ${
                activeTab === "Services" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Services")}
            >
              Services
            </li>
            <li
              className={`tab-items ${activeTab === "Contact" ? "active" : ""}`}
              onClick={() => handleTabClick("Contact")}
            >
              Contact
            </li>
            <li className="tab-items black">Menu</li>
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
          {["Home", "Portfolio", "Services", "Contact"].map((tab) => (
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
