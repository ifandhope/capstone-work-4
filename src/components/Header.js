import React from "react";
import { Link } from "react-router-dom";

import Heroimg from "../images/Heroimg.jpg";

export default function Header() {
  return (
    <header className="header">
      <section className="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>
                Little Lemon is a family owned Mediterranean restaurant, focused
                on traditional recipes served with a modern twist.
              </p>
              <div className="linkbtn">
                <Link to="/booking" className="btn_reserve">
                  Reserve Table
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <img
                src={Heroimg}
                width="300"
                height="300"
                alt="Restaurant"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
