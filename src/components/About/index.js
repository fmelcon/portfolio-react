import React from "react";
import "./styles.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About me</h3>
        <p>
          I am a lover of technology, always learning new things and integrating
          good and best practices, here are some of my projects
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://pixabay.com/es/photos/perro-mascota-animales-piel-hocico-3277417.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
