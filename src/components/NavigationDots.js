import React from "react";

const NavigationDots = ({ active }) => {

  return (
    <div className="app__navigation">
      {[
        "Accueil",
        "À propos",
        "Projets",
        "Compétences",
        "Témoignage",
        "Contact",
      ].map((item, index) => (
        <a
         className="app__navigation-dot"
         href={`#${item}`}
         key={item+index}
         
         style ={ active === item ? {backgroundColor: '#313BAC'} : { }}
        > </a>
      ))}
    </div>
  );
};

export default NavigationDots;
