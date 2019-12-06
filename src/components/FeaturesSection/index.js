import React from "react";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <section className="section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title is-spaced is-2 has-text-weight-bold">
            Tout sur le serveur
          </h1>
          <h2 className="FeaturesSection__subtitle subtitle">
            Sample de text.
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
