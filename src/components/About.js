import React from "react";

import chef from "../images/chef.jpg";
import MarioAdrian from "../images/MarioAdrian.jpg";

export default function About() {
  return (
    <div className="aboutSection">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <div>
              <h3 className="aboutTitle">Little Lemon</h3>
              <h5 className="aboutLocation">Chicago</h5>
              <p className="aboutDescription">
                Little Lemon is a family-owned Mediterranean restaurant. Adrian
                and Mario are brothers and have been working together for about
                20 years. They focus on traditional recipes served with a modern
                twist.
              </p>
            </div>
          </div>
          <div className="col-lg-6 relative chefs d-flex align-items-center justify-content-center">
            <div className="absolute">
              <img src={chef} width="200" height="200" alt="chef1" />
            </div>
            <div
              className="absolute"
              style={{ transform: "translate(-60px, 60px)" }}
            >
              <img src={MarioAdrian} width="200" height="200" alt="chef2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
