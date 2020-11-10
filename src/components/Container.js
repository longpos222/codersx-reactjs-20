import React, { useRef, useEffect, Fragment } from "react";
import googleDoodle from "../google-doodle.jpg";

import "./Container.css";

const Container = (props) => {

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  return (
    <div className="container">
      <img src={googleDoodle} alt="google-doodle" style={{ width: 300 }}></img>

      <div className="search-bar">
        <span class="material-icons">search</span>
        <input ref={inputRef} type="text"></input>
      </div>

      <div className="button-group">
        <button>Google Search</button>
        <button>I'm feeling Lucky</button>
      </div>

      <div className="lang-group">
        Google offered in: <a href="https://www.google.com/">Tiếng Việt</a>{" "}
        <a href="https://www.google.com/">Français</a>{" "}
        <a href="https://www.google.com/">中文（繁體)</a>
      </div>
    </div>
  );
};

export default Container;
