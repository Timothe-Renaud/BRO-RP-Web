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
              {/**
               * Section des button de la page d'acueille.
               */}
              <div className="columns">
                <div className="column">
                  <button
                  className="button is-primary"
                  onClick={() => {
                    const el = document.getElementById("pricing");
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  FAQ
                </button>
                </div>
                <div className="column">
                  <button
                    className="button is-primary"
                    onClick={() => {
                      const lien = window.open('https://discord.gg/CaNC79W','lienWebToDiscord')
                      
                    }}
                  >
                    Discord
                  </button>
                </div>
                <div className="column">
                  <button
                    className="button is-primary"
                    onClick={() => {
                      const PDF = window.open("http://www.google.fr","WeLink");
                    }}
                  >
                    Loi de la ville
                  </button>
                </div>
              </div>
            </header>

            <div className="column is-5-desktop has-text-centered-touch">
              {/**
               * avoir le sangs
               */}
            </div>
          </div>

        



          <div className="column is-1" />
          <div className="column">
            <figure className=" images image effets MainSection__image image">
              <img src="https://i.imgur.com/RPeK41o.png" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
