import React from "react";
import Testimonials from "./../Testimonials";
import "./styles.scss";

function TestimonialsSection(props) {
  return (
    <section className="TestimonialsSection section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title has-text-centered"> Législation </h1>
        </header>
        <Testimonials
          items={[
            {
              headerImage:
                "https://images.unsplash.com/photo-1492138623748-a1b1f758a762",
              Titre: "Armurerie",
              bio:
                " Voici la liste des armes en vente Libre dans tout les armureries de l'ile ( uniquement si l'acheteur est en possetion du PPA )",
              company: "MonArmurerie.net.FR.XD.mescouilles.com",
              name:"Armurerie",
              Img:"https://vignette.wikia.nocookie.net/gta/images/4/4e/CombatPistol-GTA5-ingame.png/revision/latest?cb=20150322130300&path-prefix=fr",
              companyUrl: "#"
            },
            {
              headerImage: "https://source.unsplash.com/uwPBAlQyIag/1080x360",
              Titre: "Auto & Moto",
              name: "Concessionnaire auto & moto",
              Img: "https://i.imgur.com/MZI18Y2.png",
              bio:
                "Ci-dessous, vous aurez accès au fascicule de vente de tout les deux et quatre roue de l'ile tout droit importé du nepal du Nord, ce qui vous garentis des vehicules de qualités et l'epreuve des balles askip",
              company: "JackyTunning.XD.BennyHill.com",
              companyUrl: "#"
            },
            {
              headerImage: "https://source.unsplash.com/pJ_DCj9KswI/1080x360",
              Titre: "Objets Illegal",
              name: " Objet et arme Illegal",
              Img: "https://fairy-v.com/wp-content/uploads/2017/08/CompactRifle.png",
              bio:
                "Ici vous pourrez avoir ( uniquement ) la liste des objets illegaux ( ne pas ce faire controlé avec). Les points de ventes sont à trouver sur l'ile.",
              company: "DarkWebZerDuNet.CpasKramé.com",
              companyUrl: "#"
            }
          ]}
        />
      </div>
    </section>
  );
}

export default TestimonialsSection;
