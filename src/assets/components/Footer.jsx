import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-11/12 py-5 mx-auto">
        <hr className="border border-gray-300" />
        <h4 className="pl-5 py-5 font-thin md:tracking-wide">
          Copyright© 2024 Techmart. All rights reserved.
        </h4>
        <hr className="border border-gray-300" />
      </div>
      <div className="w-11/12 px-5 pb-5 mx-auto flex items-center justify-between">
        <div className="md:flex items-center gap-5 font-thin md:tracking-wide">
          <h4>
            <Link to="/contact">Contact Us</Link>
          </h4>
          <h4>
            <Link to="/about">About Us</Link>
          </h4>
          <h4>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </h4>
        </div>
        <div className="md:flex items-center gap-4 font-light md:tracking-wide">
          <p>Stay in the Loop?</p>
          <div className="grid grid-cols-2 gap-2 md:flex">
            <Link to="www.facebook.com">
              <FaFacebook size={22} color="#24355A" />
            </Link>
            <Link to="www.twitter.com">
              <FaXTwitter size={22} color="#24355A" />
            </Link>
            <Link to="www.instagram.com">
              <FiInstagram size={22} color="#24355A" />
            </Link>
            <Link to="www.whatsapp.com">
              <IoLogoWhatsapp size={22} color="#24355A" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
