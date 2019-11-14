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
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/mind_map_cwng.svg"
            },
            {
              title: "La Police",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personal_settings_kihd.svg"
            },
            {
              title: "les EMS",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/having_fun_iais.svg"
            },
            {
              title: "les groupes illégaux",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/balloons_vxx5.svg"
            },
            {
              title: "Les Jobs Légaux",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/balloons_vxx5.svg"
            },
            {
              title: "Le Concessionnaire",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/balloons_vxx5.svg"
            },
            {
              title: "L'immobiliée en ville",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/balloons_vxx5.svg"
            },
            {
              title: "Le Concessionnaire",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/balloons_vxx5.svg"
            }
          ]}
        />
      </div>
    </section>
  );
}

export default FeaturesSection;
