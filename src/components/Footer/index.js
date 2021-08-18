import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Franco Melcon</h1>
        <p>Fron End Developer</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get work together</p>
      </div>
      <div className="footer-sns">
        <div className="sns-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fmelcon/"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fmelcon"
          >
            <i className="fab fa-github github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="http://">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
