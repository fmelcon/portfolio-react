import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Slider from "./components/Slider";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div>
      <Navbar isScrolling={scrollHeight} />
      <Hero />
      <About />
      <Slider />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
