import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const button = props => {
  if (props.href) {
    return (
      <a
        className={`btn ${props.class ? props.class : ""} ${
          props.btnGhost ? "btn--ghost" : ""
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return <Link
      to={props.to}
      exact={props.exact}
      className={`btn ${props.class ? props.class : ""} ${
        props.btnGhost ? "btn--ghost" : ""
      }`}
      href={props.href}
    >
      {props.children}
    </Link>;
  }
  return (
    <button
      className={`btn ${props.class ? props.class : ""} ${
        props.btnGhost ? "btn--ghost" : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default button;
