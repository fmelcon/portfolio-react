import React from "react";
import "./styles.css";
const slidesInfo = [
  {
    src: "https://i.imgur.com/4ox2cPr.png",
    alt: "Proyect 1",
    desc: "Proyect 1",
  },
  {
    src: "https://i.imgur.com/yMONIhB.png",
    alt: "Proyect 2",
    desc: "Proyect 2",
  },
  {
    src: "https://i.imgur.com/QP6TVSz.png",
    alt: "Proyect 3",
    desc: "Proyect 3",
  },
  {
    src: "https://i.imgur.com/Ce48x0d.png",
    alt: "Proyect 4",
    desc: "Proyect 4",
  },
];

const slides = slidesInfo.map((slide) => (
  <div key={slide.desc} className="slide-container">
    <img classname="about-img" src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
