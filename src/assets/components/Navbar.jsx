import React, { useState } from "react";
import logo from "../Logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Dropdown from "../components/Dropdown";
import { NavLink } from "react-router-dom";
import { TiThMenu, TiTimes } from "react-icons/ti";

const Navbar = (props) => {
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const DropdownShow = () => {
    setIsDropdownShow(true);
  };
  const DropdownHide = () => {
    setIsDropdownShow(false);
  };

  useGSAP(() => {
    gsap.from(".nav-obj", {
      y: 50,
      duration: 1,
      opacity: 0,
      delay: 0.3,
      stagger: 0.2,
    });
  });

  return (
    <div className={props.className}>
      <div className={props.className2}>
        <div className="flex items-center sm:gap-6">
          <img src={logo} alt="logo" width={"70px"} className="nav-obj" />
          <h1 className="nav-obj sm:text-[5vw] md:text-[1.5vw] lg:text-[2vw] tracking-wider hover:underline">
            <NavLink to="/">TECHMART</NavLink>
          </h1>
          <h1
            className="nav-obj sm:text-[1vw] md:text-[1.5vw] lg:text-[2vw] hidden tracking-wider relative md:flex hover:underline"
            onMouseEnter={DropdownShow}
            onMouseLeave={DropdownHide}
          >
            <NavLink
              className={(e) => {
                return e.isActive ? "blue" : "";
              }}
              to="/products"
            >
              PRODUCTS
            </NavLink>
            {isDropdownShow && (
              <Dropdown
                onMouseLeave={DropdownHide}
                onMouseEnter={DropdownShow}
              />
            )}
          </h1>
        </div>
        <div className="md:flex items-center gap-6 hidden">
          <h1 className="nav-obj sm:text-[1vw] md:text-[1.5vw] lg:text-[2vw] tracking-wider hover:underline">
            <NavLink
              className={(e) => {
                return e.isActive ? "blue" : "";
              }}
              to="/about"
            >
              ABOUT
            </NavLink>
          </h1>
          <h1 className="nav-obj sm:text-[1vw] md:text-[1.5vw] lg:text-[2vw] tracking-wider hover:underline">
            <NavLink
              className={(e) => {
                return e.isActive ? "blue" : "";
              }}
              to="/cart"
            >
              CART
            </NavLink>
          </h1>
        </div>
        {/* TiThMenu Icon for Sidebar */}
        <div className="md:hidden">
          <TiThMenu
            size={25}
            color="#25375B"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      {/* Transparent Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-y-0 left-0 w-50 h-50 bg-[#ffffff51] shadow-lg">
            <div className="absolute top-2 right-2">
              <TiTimes
                size={28}
                color="#25375B"
                className="cursor-pointer"
                onClick={closeSidebar}
              />
            </div>
            <ul className="py-16 px-2 text-[5vw]">
              <li>
                <NavLink
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                  to="/"
                  onClick={toggleSidebar}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                  to="/products"
                  onClick={toggleSidebar}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                  to="/cart"
                  onClick={toggleSidebar}
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                  to="/about"
                  onClick={toggleSidebar}
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                  to="/contact"
                  onClick={toggleSidebar}
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                  to="/terms-and-conditions"
                  onClick={toggleSidebar}
                >
                  terms & conditions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
