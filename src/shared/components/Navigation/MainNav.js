import React from "react";

import Sidebar from '../UI/Sidebar/Sidebar';
import NavLinks from "./NavLinks";
import "./MainNav.scss";

const mainNav = props => {
  return (
    <nav className={`main__nav`}>
     <Sidebar show={props.show} toggled={props.toggleSidedrawer}/>
      <NavLinks />
    </nav>
  );
};

export default mainNav;
