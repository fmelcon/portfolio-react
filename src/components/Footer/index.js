import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Franco Melcon</h1>
      </div>
      <div className="footer-contact">
        <h3>Contact Me</h3>
      </div>
      <div className="footer-sns">
        <div className="Design">Design By Franco Melcon</div>
        <div className="sns-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fmelcon/"
          >
            <i className="fab fa-linkedin likedin"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fmelcon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="http://">
            <i className="fab fa-facebook f"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
