import React from "react";

import Button from "../UI/Button/Button";
import MainNav from "../Navigation/MainNav";
import "./Header.scss";

const header = props => {
  return (
    <header className={`header`}>
      <MainNav show={props.show} toggleSidedrawer={props.onToggle}/>
      <h3 className="heading-3">A new beginning starts with</h3>
      <h1 className="heading-1">Your own house</h1>
      <Button class={"header__btn"} to='/'>
        View properties
      </Button>
      <div className="header__card">
        <h2 className="heading-2 mb-md ">Only the best</h2>
        <p className="header__text">
          We helped lots of people finding their dream house. We work with
          experienced real estate agents and their professionalism helped people
          having a new start.
        </p>
      </div>
    </header>
  );
};

export default header;
