import React from "react";
import footerlogo from "../images/footerlogo.jpg";

export default function Footer() {
  return (
    <footer>
      <section className="footerRow ">
        <div className="col  footer-logo">
          <img src={footerlogo} width="50" height="70" alt="footerlogo" />
        </div>
        <div className="col  footer-navigation">
          <h6 className="footerText ">Doormat Navigation</h6>
          <ul className="footerNav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About </a>
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
        </div>
        <div className="col  footer-contact">
          <h6 className="footerText-contact ">Contact</h6>
          <ul className="footerNav ">
            <li>Address</li>
            <li>EPhone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="col footer-link">
          <h6 className="footerText">Social Media Links</h6>
          <ul className="footerNav">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TicToc</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
