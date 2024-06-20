import React from "react";
import cell from "../Categories/cellphone.png";
import headset from "../Categories/Headset.png";
import laptop from "../Categories/laptop.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Dropdown = () => {
  useGSAP(() => {
    gsap.from(".drop", {
      y: 80,
      duration: 1,
      ease: "expo.inOut",
      opacity: 0,
    });
  });

  return (
    <div className="drop w-[800px] h-[300px] rounded-md absolute top-8 left-0 z-[999] flex items-center justify-around p-4 text-2xl font-bold font-serif shadow-2xl">
      <div className="w-4/12 h-60 flex flex-col items-center gap-11">
        <img src={cell} alt="Smart Phones" width={"85%"} />
        <Link to="/cellphones">
          <h1 className="hover:text-slate-700">Smart Phones</h1>
        </Link>
      </div>
      <div className="w-px h-40 bg-white"></div>
      <div className="w-4/12 h-60 flex flex-col items-center gap-11">
        <img src={laptop} alt="Laptop" width={"100%"} />
        <Link to="/laptop">
          <h1 className="hover:text-slate-700">Laptops</h1>
        </Link>
      </div>
      <div className="w-px h-40 bg-white"></div>
      <div className="w-4/12 h-60 flex flex-col items-center gap-5">
        <img src={headset} alt="HeadPhones" width={"65%"} />
        <Link to="/headphones">
          <h1 className="hover:text-slate-700">HeadPhones</h1>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
