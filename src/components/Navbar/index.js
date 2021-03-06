import React from "react";
import "./styles.css";

const Navbar = ({ isScrolling }) => {
  const moveTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={moveTop}>
        Home
      </div>
    </nav>
  );
};

export default Navbar;
