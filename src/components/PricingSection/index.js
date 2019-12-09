import React from "react";
import Pricing from "./../Pricing";
import "./styles.scss";

function PricingSection(props) {
  return (
    <section className="section is-medium" id="pricing">
      <div className="PricingSection__container container">
        <header className="section-header">
          <h1 className="title">FAQ</h1>
        </header>
        <Pricing
          items={[
            {
              timespan: "LA ville",
              description: " Pour les regle de la ville voir le PDF present sur le haut du site"
            },
            {
              timespan: "Qui sommes nous?",
              price: "29",
              ListeJob:
                " 5 bro encore étudiant, jeune diplomés et jeune travailleurs tous provenant de l'informatique.",
              description:
                " L'informatique c'est notre delire et coeur de metier, ducoup comme on aime bien ce tapé des barres sur le net on a ouvert le serveur Bro's Rp." +
                " les regles sont stric la vie de moi si tu fait TB on te vire." +
                " Si vous avez un problems vous pouvez sans hesité nous Mp sur Discord, nous vous repondrons dans les meilleurs delais.",
              emphasized: true
            },
            {
              timespan: "Job Legale",
              ListeJob:
                "Tabagiste, Policier, Couturier, Poissonier et bien d'autre encore ... ",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam."
            },
            {
              timespan: "Job Illegale",
              ListeJob:
                "Gang leader ou sbire, Traficant, Revendeur, Blanchisseur, Contacte arme Illegale et bien d'autre encore...",
              description:
                "Les jobs sont nominatifs, si une personne postule pour etre marchant d'arme illegal, le joueur cera l'unique fournisseur et,ou, vendeur pendants la vie ( RP). Si le joueur decede ( RP), le role pourras ou pas etre transferet a un autre joueur.",
              emphasized: true
            }
          ]}
        />
      </div>
    </section>
  );
}

export default PricingSection;
