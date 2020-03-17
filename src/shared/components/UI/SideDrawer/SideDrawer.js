import React from "react";
import {NavLink} from 'react-router-dom';

import Button from '../Button/Button';
import "./SideDrawer.scss";

const sideDrawer = props => {
  return (
    <div className={`side__drawer ${props.show ? 'show' : ''}`}>
      <ul className={`side__links`}>
        <li>
          <NavLink className='side__link' to="/" exact active='true'>Home</NavLink>
        </li>
        <li>
          <NavLink className='side__link' to="/buy">Buy</NavLink>
        </li>
        <li>
          <NavLink className='side__link' to="/sell">Sell</NavLink>
        </li>
        <li>
          <NavLink className='side__link' to="/homes">New Homes</NavLink>
        </li>
        <li>
          <Button btnGhost to="/">
            Free Expertise
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default sideDrawer;
