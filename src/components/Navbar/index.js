import React from "react";
import Img from "../images/logo.png";

import "./styles.scss";

function Navbar(props) {
  return (
    <nav className="Navbar navbar">
      <div className="container">
        <div className="navbar-brand">
            <img
            alt=''
              src="https://i.imgur.com/ofnFzzg.png"
             /*  width={100}
              height={200} */
            />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
