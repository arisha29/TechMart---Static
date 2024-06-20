import React, { useEffect, useState } from "react";
import Landingpg from "./Landingpg";
import ipad from "../LandingPg/ipad.png";
import cellphone from "../LandingPg/cells.png";
import headphone from "../LandingPg/headphones.png";

const slides = [
  {
    img: ipad,
    word1: "SLEEK AND",
    word2: "LIGHTWEIGHT",
    word3: "DESIGN",
  },
  {
    img: cellphone,
    word1: "CUTTING-EDGE",
    word2: "TECHNOLOGY",
    word3: "INSIDE",
  },
  {
    img: headphone,
    word1: "IMMERSIVE",
    word2: "LISTENING",
    word3: "EXPERIENCE",
  },
];

const LandingPgcont = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(slideInterval);
  }, []);
  
  return (
    <>
      <Landingpg
        img={slides[currentSlide].img}
        word1={slides[currentSlide].word1}
        word2={slides[currentSlide].word2}
        word3={slides[currentSlide].word3}
      />
    </>
  );
};

export default LandingPgcont;
