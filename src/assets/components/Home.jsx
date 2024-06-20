import React, { useEffect } from "react";
import LandingPgcont from "../components/LandingPgcont";
import Marquee from "./Marquee";
import CategoryCont from "./CategoryCont";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    document.title = "TechMart - Home";
  }, []);

  return (
    <>
      <LandingPgcont />
      <Marquee />
      <CategoryCont />
      <Footer />
    </>
  );
};

export default Home;
