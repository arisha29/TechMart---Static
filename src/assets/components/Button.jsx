import React from "react";

const Button = ({ onClick, btn, className }) => {
  return (
    <button
      onClick={onClick}
      className={`Btn tracking-wider overflow-hidden transition duration-300 transform translate-x-0 translate-y-0 hover:before:border-r-0 active:border-r-0 ${className}`}
    >
      <span>{btn}</span>
    </button>
  );
};

export default Button;
