import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./styles.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h3>My Projects</h3>
      </div>
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          "centered",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 1,
            },
          },
        ]}
        slides={Slides}
      />
    </div>
  );
};

export default Slider;
