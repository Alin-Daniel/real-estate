import React from "react";
import {NavLink} from 'react-router-dom';

import Button from "../UI/Button/Button";
import "./NavLinks.scss";

const NavLinks = props => {
  return (
    <React.Fragment>
      <ul className={`main__nav--links`}>
        <li>
          <NavLink to="/" exact active='true'>
            <span className="visible">Home</span>
            <span className="invisible">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span className="visible">Buy</span>
            <span className="invisible">Buy</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span className="visible">Sell</span>
            <span className="invisible">Sell</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span className="visible">New Homes</span>
            <span className="invisible">New Homes</span>
          </NavLink>
        </li>
        <li>
          <Button btnGhost to="/" class="main__nav-btn">
            Free Expertise
          </Button>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
