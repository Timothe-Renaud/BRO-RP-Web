import React from "react";

import "./styles.scss";

function MainSection(props) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-5-desktop has-text-centered-touch">
            <header className="MainSection__header">
              <h1 className="title is-spaced is-1 has-text-weight-bold">
                Bro's RP
              </h1>
              <p className="MainSection__subtitle subtitle">
                le seveur bro's RP patatatatattatatatta ETC... Presentation et
                autre text important de site directement sur la page d'acueil
              </p>
            </header>
            <button
              className="button is-medium is-primary"
              onClick={() => {
                const el = document.getElementById("pricing");
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              FAQ
            </button>
          </div>
          <div className="column is-1" />
          <div className="column">
            <figure className="MainSection__image image">
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/japan_ubgk.svg" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
