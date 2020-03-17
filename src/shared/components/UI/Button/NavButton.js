import React from "react";

import "./NavButton.scss";

const navButton = props => {
  return (
    <div
      onClick={props.clicked}
      className={`toggle-btn ${props.show ? "toggle-on" : ""}`}
    >
      <span className="nav-btn"></span>
    </div>
  );
};

export default navButton;
