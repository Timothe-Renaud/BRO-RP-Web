import React from "react";

import "./styles.scss";

function Footer(props) {
  return (
    <footer className="FooterComponent">
      <div className="columns">
      <div className="column"></div>
        <div className="column">
          <p>
            2019 Bro's RP, Inc © tout droit reservés <br/>
            créée w/ <a href="https://nodejs.org/en/">Node</a> & <a href="https://fr.reactjs.org/"> React.js</a> with<a href="https://bulma.io/"> Bulma-CSS</a>
          </p>
        </div>
        <div className="column"></div>
      </div>
    </footer>
  );
}

export default Footer;
