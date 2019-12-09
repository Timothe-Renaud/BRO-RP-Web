import React from "react";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <section className="section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title is-spaced is-2 has-text-weight-bold">
            Utilitaire
          </h1>
          <h2 className="FeaturesSection__subtitle subtitle">            
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
                "https://i.imgur.com/PawdbHJ.jpg"
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
