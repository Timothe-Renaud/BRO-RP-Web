import React from "react";
import Img from "../images/logo.png";

import "./styles.scss";

function Navbar(props) {
  return (
    <nav className="Navbar navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://mega.nz/fm/a9lAyAZD" width={112} height={28} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
