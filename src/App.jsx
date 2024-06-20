import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/components/Home";
import CategoryCont from "./assets/components/CategoryCont";
import About from "./assets/components/About";
import Cart from "./assets/components/CartPg";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import TermsCond from "./assets/components/TermsCond";
import ErrorPg from "./assets/components/ErrorPg";
import Contact from "./assets/components/Contact";
import LaptopPg from "./assets/components/LaptopPg";
import CellphonePg from "./assets/components/CellphonePg";
import AccessoriesPg from "./assets/components/AccessoriesPg";
import HeadphonesPg from "./assets/components/HeadphonesPg";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Navbar
            className="w-full h-24 shadow-lg"
            className2="w-4/5 mx-auto flex items-center justify-between text-[#8C95A5] py-5 px-2 font-medium text-lg"
          />
          <CategoryCont />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar
            className="w-full h-24 shadow-lg"
            className2="w-4/5 mx-auto flex items-center justify-between text-[#8C95A5] py-5 px-2 font-medium text-lg"
          />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar
            className="w-full h-24 shadow-lg"
            className2="w-4/5 mx-auto flex items-center justify-between text-[#8C95A5] py-5 px-2 font-medium text-lg"
          />
          <Cart />
          <Footer />
        </>
      ),
    },
    {
      path: "/terms-and-conditions",
      element: (
        <>
          <Navbar
            className="w-full h-24 shadow-lg"
            className2="w-4/5 mx-auto flex items-center justify-between text-[#8C95A5] py-5 px-2 font-medium text-lg"
          />
          <TermsCond />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar
            className="w-full h-24 shadow-lg"
            className2="w-4/5 mx-auto flex items-center justify-between text-[#8C95A5] py-5 px-2 font-medium text-lg"
          />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/laptop",
      element: (
        <>
          <Navbar
            className="w-full h-24 shadow-lg"
            className2="w-4/5 mx-auto flex items-center justify-between text-[#8C95A5] py-5 px-2 font-medium text-lg"
          />
          <LaptopPg />
          <Footer />
        </>
      ),
    },
    {
      path: "/cellphones",
      element: (
        <>
          <Navbar
            className="w-full h-24 shadow-lg"
            className2="w-4/5 mx-auto flex items-center justify-between text-[#8C95A5] py-5 px-2 font-medium text-lg"
          />
          <CellphonePg />
          <Footer />
        </>
      ),
    },
    {
      path: "/accessories",
      element: (
        <>
          <Navbar
            className="w-full h-24 shadow-lg"
            className2="w-4/5 mx-auto flex items-center justify-between text-[#8C95A5] py-5 px-2 font-medium text-lg"
          />
          <AccessoriesPg />
          <Footer />
        </>
      ),
    },
    {
      path: "/headphones",
      element: (
        <>
          <Navbar
            className="w-full h-24 shadow-lg"
            className2="w-4/5 mx-auto flex items-center justify-between text-[#8C95A5] py-5 px-2 font-medium text-lg"
          />
          <HeadphonesPg />
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: <ErrorPg />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
