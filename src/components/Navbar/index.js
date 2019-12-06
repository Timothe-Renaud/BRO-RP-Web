import React from "react";
import Img from "../images/logo.png";

import "./styles.scss";

function Navbar(props) {
  return (
    <nav className="Navbar navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
            alt=''
              src=""
              width={100}
              height={150}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
