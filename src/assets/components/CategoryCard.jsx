import React from "react";
import { Link } from "react-router-dom";
import button from '../components/Button';
import Button from "../components/Button";

const CategoryCard = (props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-0 md:gap-6 hover:border-2 hover:rounded-md hover:opacity-100">
      <div className="w-full lg:w-72 h-80 bg-white rounded-lg">
        <img
          src={props.img}
          alt="Image"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-[#29456b] font-medium text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.1vw]">
          Upto 16% off
        </h3>
        <h2 className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.3vw] font-medium hover:text-[#29456b] mt-3">
          {props.title}
        </h2>
        <p className="opacity-60 md:mt-2 text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1vw]">
          {props.txt}
        </p>
        <Link to={props.link}>
          <div className="mt-5 mb-5 md:mb-0">
            <Button btn="see more" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;