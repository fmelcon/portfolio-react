import React from "react";
import "./styles.css";
const slidesInfo = [
  {
    src: "https://i.imgur.com/4ox2cPr.png",
    alt: "Crypto React",
    desc: "Crypto React",
    link: "https://github.com/fmelcon/criptomonedas",
  },
  {
    src: "https://i.imgur.com/yMONIhB.png",
    alt: "Image Searcher",
    desc: "Image Searcher",
    link: "https://github.com/fmelcon/buscador",
  },
  {
    src: "https://i.imgur.com/QP6TVSz.png",
    alt: "Drinks Recipes",
    desc: "Drinks Recipes",
    link: "https://github.com/fmelcon/drinks",
  },
  {
    src: "https://i.imgur.com/Ce48x0d.png",
    alt: "BrBa Quotes",
    desc: "BrBa Quotes",
    link: "https://github.com/fmelcon/breakingbad-quotes",
  },
  {
    src: "https://i.imgur.com/4qSVoyS.png",
    alt: "Ecommerce",
    desc: "Ecommerce",
    link: "https://github.com/fmelcon/ecommerce",
  },
  {
    src: "https://i.imgur.com/6JNI6ts.png",
    alt: "Budget App",
    desc: "Budget App",
    link: "https://github.com/fmelcon/Gastos",
  },
  {
    src: "https://i.imgur.com/32xmjzf.png",
    alt: "Appointment manager",
    desc: "Appointment manager",
    link: "https://github.com/fmelcon/admcitas",
  },
];

const slides = slidesInfo.map((slide) => (
  <div key={slide.desc} className="slide-container">
    <a target="_blank" rel="noopener noreferrer" href={slide.link}>
      <img classname="about-img" src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
