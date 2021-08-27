import React from "react";
import "./styles.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About me</h3>
        <p>
          I am a web development student, I love to learn new things and
          overcome challenges, grow and improve in my career
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-business-male-icon-vector-png-image_916468.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
