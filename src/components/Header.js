import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-left">
          <h1>
            <Link to="/">BMI Calculator</Link>
          </h1>
        </div>
        <div className="nav-right">
          <div className="nav-item">
            <Link to="/bmi">Calculate</Link>
          </div>
          <div className="nav-item">
            <Link to="/graph">Graph</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
