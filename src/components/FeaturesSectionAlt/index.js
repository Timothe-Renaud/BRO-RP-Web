import React from "react";
import FeaturesAlt from "./../FeaturesAlt";
import "./styles.scss";

function FeaturesSectionAlt(props) {
  return (
    <section className="FeaturesSectionAlt section is-medium">
      <div className="FeaturesSectionAlt__container container">
        <FeaturesAlt
          items={[
            {
              title: "Discord ",
              description: "Rejoind le discord"
            },
            {
              title: "White Liste",
              description:
                " Un système de WhitListe est utiliser pour vérifier que tout joueur respect bien le reglement du serveure (voire le Readme des regles)."
            },
            {
              title: "Modération ",
              description:
                "Wargun, YaniSaï, Kalu, Lidje et Mystyk sont les moderateur du serveur."
            }
          ]}
        />
      </div>
    </section>
  );
}

export default FeaturesSectionAlt;
