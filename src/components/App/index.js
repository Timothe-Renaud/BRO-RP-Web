import React from "react";
import Footer from "./../Footer";
import FeaturesSection from "./../FeaturesSection";
import FeaturesSectionAlt from "./../FeaturesSectionAlt";
import TestimonialsSection from "./../TestimonialsSection";
import ClientsSection from "./../ClientsSection";
import PricingSection from "./../PricingSection";
import Navbar from "./../Navbar";
import Divider from "./../Divider";
import MainSection from "./../MainSection";
import "./styles.scss";

function App(props) {
  return (
    <>
    {/* Ici j'ai supprimer la navbar par ce qu'elle pret de la place mais n'est pas utilisé
    Les files sont toujours present dans le project mais rien n'est actif (juste pour la MCO) 
      <Navbar />*/}
      <MainSection />
      <ClientsSection />
      <Divider />
      <FeaturesSection />
      <Divider />
      <TestimonialsSection />
      <Divider />
      <FeaturesSectionAlt />
      <Divider />
      <PricingSection />
      <Footer />
    </>
  );
}

export default App;
