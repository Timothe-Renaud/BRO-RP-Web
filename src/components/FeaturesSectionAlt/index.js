import React from "react";
import FeaturesAlt from "./../FeaturesAlt";
import "./styles.scss";

function FeaturesSectionAlt(props) {
  return (
    <section className="gradient FeaturesSectionAlt section is-medium">
      <div className="FeaturesSectionAlt__container container">        
        <FeaturesAlt
          items={[
            {
              title: "Les évennements ",
              description: "Le calendrier des évennements ce fais sur le Discord de la même facon que les demande d'evennement."
            },
            {
              title: "White Liste",
              description:
                " Un système de WhitListe est utiliser pour vérifier que tout joueur respect bien le reglement du serveure (voire le Readme des regles)."
            },
            {
              title: "Mise à jours ",
              description:
                "De nombreux Dev sont présents dans le baille pour vous fournir des mises à jours réguliere comme quand tu vas touché au dealos du coin. "
                + "Le calendrier des mises à jour est dispo sur le Discord. Si vous avez une question sur le fonctionnement et/ou l'ajout de fonctionnalité sur le serveur Feel free to nous la donnée ( voir via channel Discord )."
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
