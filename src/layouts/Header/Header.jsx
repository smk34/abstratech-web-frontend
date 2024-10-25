import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle menu open/close
  };

  // Check active tab based on the current location
  const getActiveTab = (path) => (location.pathname === path ? "active" : "");
  

  return (
    <header>
      <nav className="navbar sticky-top">
        <div className="logo">
          {/* <img src={Logo} alt="logo" /> */}
          <Link to="/">
            <h1>ABSTERTEK</h1>
          </Link>
        </div>
        <div className="tab">
          <ul className="tab-list desktop">
            <li className={`tab-items ${getActiveTab("/")}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className={`tab-items ${getActiveTab("/portfolio")}`}>
              <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li className={`tab-items ${getActiveTab("/services")}`}>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            {/* <li className={`tab-items ${getActiveTab("/about")}`}>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li> */}
            {/* <li className={`tab-items ${getActiveTab("/contact")}`}>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li> */}
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
          <li className={`tab-items ${getActiveTab("/")}`}>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className={`tab-items ${getActiveTab("/portfolio")}`}>
            <Link to="/portfolio" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li className={`tab-items ${getActiveTab("/services")}`}>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          {/* <li className={`tab-items ${getActiveTab("/contact")}`}>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
