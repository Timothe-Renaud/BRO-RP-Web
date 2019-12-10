import React from "react";
import Pricing from "./../Pricing";
import "./styles.scss";

function PricingSection(props) {
  return (
    <section className="section is-medium" id="pricing">
      <div className="PricingSection__container container">
        <header className="section-header">
          <h1 className="title">F.A.Q</h1>
        </header>
        <Pricing
          items={[
            {
              timespan: "Qu'est ce que Bro's RP.",
              ListeJob:
                " Bro's RP est un serveur Roleplay de GTA V propulsé par FiveM sous FXServer. ",
              description:
                "Hébergé en France depuis un serveur dédié de dernière génération, notre serveur tourne en permanence et est accessible 24h/24 7j/7 depuis FiveM. Pourquoi FiveM ?"
            },           
            {
              timespan: "Qui sommes nous?",
              price: "29",
              ListeJob:
                " 5 bros, étudiant, jeune diplomés ou jeune travailleurs tous provenant de l'informatique.",
              description:
                " L'informatique c'est notre delire et coeur de metier, ducoup comme on aime bien ce tapé des barres sur le net on a ouvert le serveur Bro's Rp." +
                " les regles sont stric la vie de moi si tu fait TB on te vire." +
                " Si vous avez un problems vous pouvez sans hesité nous Mp sur Discord, nous vous repondrons dans les meilleurs delais.",
              emphasized: true
            },
            {
              timespan: "Pourquoi FiveM",
              ListeJob:
                " ",
              description:
                "Cette plateforme permet une plus grande flexibilité en terme de modifications (scripts, mods, etc) aussi bien du côté serveur que du côté client." +
                " Grâce à cela nous pouvons vraiment faire de notre serveur un Monde qui ne ressemble à aucun autre." +
                " D’un point de vue technique, elle est également bien mieux optimisée que certaines autres plateformes grâce au DMA (Direct Access Memory), soit une meilleure gestion du CPU et la RAM." +
                " Combien de Slots sont disponibles ?"              
            },
            {
              timespan: " Slot (pas slut) et whitelist",
              ListeJob:
                "Nous avons actuellement XXX slots de connexions disponibles en continue, mais en fonction des mois pouvons repasser à 64 slots.",
              description:
                " Le coût pour avoir les 128 slots est de $50 par mois via le patreon FiveM ce qui n’est pas négligeable en plus de la location du serveur dédiée."+
                " Oui, le Serveur n’est accessible qu’aux joueurs WhiteListés. Ceci pour raison très simple : Nous souhaitons que tous nos joueurs aient la meilleure expérience de Roleplay possible."+
                " Laisser le serveur ouvert au public serait une porte ouverte au chaos dans les rues de Los Santos. Pour rejoindre le server rendez-vous sur notre Discord."
                ,
              emphasized: true
            },
            {
              timespan: "Entreprise et Organisation",
              ListeJob:
                " Envie de brassée des lovés?? nous aussi!!",
              description:
                " Le formulaire d'enregistrement d'une nouvelle organisation est disponible sur Discord, sous réserve de condition (bien évidement ) via des channelle HRP. On pourrat parlé management et etc...",
              emphasized: false
            },
            {
              timespan: " D'autre réseau ?",
              ListeJob:
                " euuuuh",
              description:
                " bah en fait, on preferais faire un site Web ou tout vas être relayer, mais si vous etez chaud et que l'on s'entend bien, on peut evisager quelque chose par ce que j'avoue que j'ai la giga flemme xD. ",
              emphasized: true
            }            
          ]}
        />
      </div>
    </section>
  );
}

export default PricingSection;
