import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./styles.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>
      <Carousel
        plugins={["arrows", "infinite", "centered"]}
        slidesPerPage={5}
        infinite
        animationSpeed={200}
        centered
        offset={30}
        itemWidth={350}
        slides={Slides}
      />
    </div>
  );
};

export default Slider;
