import React, { Fragment } from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="lang">
        <p>Vietnam</p>
      </div>

      <div class="group-footer">
        <div class="left-footer">
          <span>Advertising</span>
          <span>Business</span>
          <span>About</span>
          <span>How Search works</span>
        </div>

        <div class="right-footer">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
