import React from "react";
import Features from "./../Features";
import "./styles.scss";


function FeaturesSection(props) {
  return (
    <section className="gradient section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title is-spaced is-2 has-text-weight-bold">
            Les points importants
          </h1>
          <h2 className="FeaturesSection__subtitle subtitle">            
          {/**
           * Section des button de la page d'acueille.
           */}
          <div className="columns">
            <div className="column">
              <button
              className="button is-dark is-large"
              onClick={() => {
                const el = document.getElementById("pricing");
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <p>
                <span className="fa fa-question-circle"></span> FAQ
              </p>
            </button>
            </div>
            <div className="column">
              <button
                className="button is-dark is-large"
                onClick={() => {
                  const lien = window.open('https://discord.gg/CaNC79W','lienWebToDiscord')
                  
                }}
              >
                <p>
                <span className="fa fa-group" alt="Discord"></span> VOIP
                </p>
              </button>
            </div>
            <div className="column">
              <button
                className="button is-dark is-large"
                onClick={() => {
                  const PDF = window.open("http://www.google.fr","WeLink");
                }}
              >
                <p>
                  <span className="fa fa-gavel"></span> la Loi
                </p>
              </button>
            </div>
            <div className="column">
              <button
                className="button is-dark is-large"
                onClick={() => {
                  const PDF = window.open("https://forms.gle/v5zaDuLE55HSRuay8","WeLink");
                }}
              >
                <p>
                  <span className="fa fa-gavel"></span> Mort RP
                </p>
              </button>
            </div>
            <div className="column">
              <button
                className="button is-dark is-large"
                onClick={() => {
                  const PDF = window.open("http://www.google.fr","WeLink");
                }}
              >
                <p>
                  <span className="fa fa-gavel"></span> Kit Stream
                </p>
              </button>
            </div>








          </div>
          </h2>
        </header>

        <Features
          items={[
            {
              title: "Le Garage Beny's machin truc...",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://i.imgur.com/oLvVjZn.jpg"
            },
            {
              title: "La Police",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://i.imgur.com/aP9wN38.png"
            },
            {
              title: "les EMS",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://i.imgur.com/U7Y1Xsj.jpg"
            },
            {
              title: "les groupes illégaux",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://i.imgur.com/VcDllP6.jpg"
            },
            {
              title: "Les Jobs Légaux",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://i.imgur.com/qUa6qHb.jpg"
            },
            {
              title: "Le Concessionnaire",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://i.imgur.com/LXAlvif.jpg"
            },
            {
              title: "L'immobiliée en ville",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://i.imgur.com/PawdbHJ.jpg"
            },
            {
              title: "la ville en ville",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://i.imgur.com/bUgBBrd.jpg"
            }
          ]}
        />
      </div>
    </section>
  );
}

export default FeaturesSection;
