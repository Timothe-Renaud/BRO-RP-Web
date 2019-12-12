import React from "react";

import "./styles.scss";

function MainSection(props) {
  return (
      <section className="gradient section has-text-black-ter">
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column is-5-desktop has-text-centered-touch">
              <header className="MainSection__header">
                <h1 className="title is-spaced is-1 has-text-weight-bold">
                  Bro's RP
                </h1>
                <p className="MainSection__subtitle subtitle">
                  le seveur bro's RP bratatatatattatatatta ETC... Présentation et
                  autre text important de site directement sur la page d'acueil ( a completé )
                </p>              
              </header>

              <div className="column is-5-desktop has-text-centered-touch">
                {/**
                 * à voir le sangs
                 */}
              </div>
            </div>
            <div className="column is-1" />
            <div className="column">
              <figure className=" imagesPerso effet MainSection__image">
                <img src="https://i.imgur.com/RPeK41o.png" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    
  );
}

export default MainSection;
