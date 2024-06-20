import React from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import cover from "../LandingPg/cover.png";
import { Link } from "react-router-dom"; 
import Button from "./Button";

const LandingPg = (props) => {
  useGSAP(() => {
    gsap.from(".obj", {
      y: 90,
      duration: 1.5,
      delay: 2,
      ease: "expo.inOut",
      opacity: 0,
      stagger: 0.4,
    });
  });

  return (
    <div id="main" className="w-screen h-screen relative">
      <div id="back" className="w-full h-full">
        <img
          src={cover}
          alt="cover"
          className="w-full h-full object-cover sm:object-right"
        />
      </div>
      <div id="front" className="w-full h-full absolute top-0 left-0">
        <section
          id="area"
          className="w-full h-full mx-auto relative px-4 md:px-28"
        >
          <Navbar className2="w-full mx-auto flex items-center justify-between text-white py-5 px-2 font-medium text-lg" />
          <div
            id="hero"
            className="w-full h-[100px] flex flex-col md:flex-row justify-between absolute left-0 top-[20%] z-10 pr-10 md:px-28 md:mt-20"
          >
            <div
              id="left"
              className="w-full md:w-6/12 h-[100px] md:mt-0 mt-[2rem]"
            >
              <div id="obj" className="obj drop-shadow-2xl">
                <img
                  src={props.img}
                  alt="Product Image"
                  className="drop-shadow-2xl w-full"
                />
              </div>
            </div>
            <div
              id="right"
              className="w-full md:w-6/12 h-[100px] mt-[13rem] md:mt-0"
            >
              <div id="elem" className="flex flex-col items-end leading-[10vw] md:leading-[7vw]">
                <h1 className="obj text-[9vw] md:text-[5vw] font-[Bebas Neue] font-bold text-white">
                  {props.word1}
                </h1>
                <h1 className="obj text-[9vw] md:text-[5vw] font-[Bebas Neue] font-bold text-white">
                  {props.word2}
                </h1>
                <h1 className="obj text-[9vw] md:text-[5vw] font-[Bebas Neue] font-bold text-white">
                  {props.word3}
                </h1>
              </div>
              <div className="obj flex justify-end mt-5 md:mt-0 pointer-events-auto">
                <Link to="/products">
                  <Button btn="Explore Now" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPg;
