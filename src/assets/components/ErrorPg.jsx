import React from "react";
import cover from "../LandingPg/cover.png";
import gif from "../noConnection.gif";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./Button";

const ErrorPg = () => {
   const error = useRouteError();
   console.error(error);

  return (
    <div className="w-full h-screen relative">
      <img src={cover} alt="cover" className="w-full h-full object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex flex-col items-center gap-[1rem] md:gap-0">
          <h1 className="font-[Bebas Neue] font-bold text-[9vw] md:text-[9vw] lg:text-[5.5vw] text-white">
            It's just a
          </h1>
          <img
            src={gif}
            alt="GIF"
            className="drop-shadow-2xl w-48 mt-[-4.5rem] md:mt-[-220px] md:w-64 lg:w-96"
          />
          <h1 className="font-[Bebas Neue] font-bold text-4xl md:text-6xl lg:text-[5.5vw] text-white">
            404 Error
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-10 mt-8">
          <p className="text-sm font-[Bebas Neue] tracking-wider md:text-lg lg:text-xl text-white">
            What you're looking for may have been misplaced
          </p>
          <Link to="/">
            <Button btn={"Back To home"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPg;
