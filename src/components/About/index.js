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
          src="https://lh3.googleusercontent.com/proxy/rKBtjoIB9XIX8vBJZS-iEKu9yujYrYFTGSyZOhW3s7XlG4KqDjF-c1TAUXPSp1CliSYBKtSkbVFJO89ZBUbV2vQKz9eb_KXAE2HNItJnQ9Kn5em3ISsf_N5hMriVUeaw"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
