import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="top-heading">ABSTERTEK</h2>
        <ul className="footer-list">
          <li className="footer-list-items">HOME</li>
          <li className="footer-list-items">PORTFOLIO</li>
          <li className="footer-list-items">SERVICES</li>
          <li className="footer-list-items">BLOGS</li>
          <li className="footer-list-items">CAREER</li>
          <li className="footer-list-items">CONTACT</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="social-media">
          <ul className="footer-social-media">
            <li className="footer-social-media-icons">
              <FaFacebookF />
            </li>
            <li className="footer-social-media-icons">
              <FaInstagram />
            </li>
            <li className="footer-social-media-icons">
              <FaXTwitter />
            </li>
            <li className="footer-social-media-icons">
              <FaLinkedin />
            </li>
          </ul>
        </div>

        <div className="footer-info">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            officiis.
          </p>
          <a href="javascript:void(0);">CONTACT@ABSTERTEK.COM</a>
          <a href="javascript:void(0);">+91 XXXXXXXXX, +91 XXXXXXXXX</a>
          <a href="javascript:void(0);">CONTACT@ABSTERTEK.COM</a>
          <p>
            © 2025 ABSTERTEK ALL RIGHTS RESERVED - Company No. XXXXXX GST No.
            XXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
