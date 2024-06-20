import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Marquee = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".element",
      {
        x: 0
      },
      {
        x: -500,
        duration: 3,
        ease: "linear",
        repeat:-1
      }
    );
  });
  return (
    <div className="w-full py-10 md:py-12 bg-[#25365B]">
      <div className="text-white text-[15vw] md:text-[10vw] font-bold leading-none border-t-2 border-b-2 border-zinc-400 font-[Bebas Neue] flex gap-8 whitespace-nowrap overflow-hidden">
        <h1 className="element pt-6">
          Your Source for Next-Level Tech Essentials
        </h1>
        <h1 className="element pt-6">
          Your Source for Next-Level Tech Essentials
        </h1>
        <h1 className="element pt-6">
          Your Source for Next-Level Tech Essentials
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
