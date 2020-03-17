import React from "react";
import {Link} from 'react-router-dom';

import "./Footer.scss";

const footer = props => {
  return (
    <footer className={`footer`}>
      <ul className="nav">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Find your dream home
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__link">
            See Real Estate Agents
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__link">
           Sell Your property
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__link">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__link">
            Careers
          </Link>
        </li>
      </ul>
    <p className={`copyright`}>&copy; {new Date().getFullYear()} Real estate Company. All rights reserved</p>
    </footer>
  );
};

export default footer;
