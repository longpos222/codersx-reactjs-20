import React, { Fragment } from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <span> Gmail </span>
      <span> Images </span>
      <span class="material-icons"> apps </span>
      <button> Sign in </button>
    </div>
  );
};

export default Header;
