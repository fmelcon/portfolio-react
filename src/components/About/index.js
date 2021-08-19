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
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
