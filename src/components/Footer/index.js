import React from "react";

import "./styles.scss";

function Footer(props) {
  return (
    <footer className="FooterComponent">
      <div className="container">
         © 2019 Bro's RP, Inc  <br/>
           CSS wrapped with<a> Bulma-CSS</a><br/>
            assembé avec Node & React.js
      </div>
    </footer>
  );
}

export default Footer;
