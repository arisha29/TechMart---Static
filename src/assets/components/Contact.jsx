import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    postalcode: "",
    message: "",
  });

  useEffect(() => {

    document.title="TechMart - Contact"

    const saveData = localStorage.getItem("formData");
    if (saveData) {
      setFormData(JSON.parse(saveData));
    }
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Your Message Have been Sent!");
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      postalcode: "",
      message: "",
    });
  };

  const handlecancel = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      postalcode: "",
      message: "",
    });
  };

  return (
    <div className="w-full">
      <div className="contact w-4/5 md:w-4/5 my-10 mx-auto py-7 md:px-10 flex flex-col md:flex-row items-center justify-around">
        <form action="" className="md:w-3/5">
          <div className="pb-12">
            <h2 className="text-[7vw] font-semibold md:tracking-widest md:text-[4.5vw] font-[Bebas Neue] text-white">
              Just Say Hello !
            </h2>
            <p className="text-[3.5vw] md:text-[1.5vw] leading-6 text-gray-600">
              Let us know more about you.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 md:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900 md:text-base  md:tracking-wider md:mt-2"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="given-name"
                    value={formData.firstname}
                    onChange={handlechange}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900 md:text-base  md:tracking-wider md:mt-2"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="family-name"
                    value={formData.lastname}
                    onChange={handlechange}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 md:text-base  md:tracking-wider md:mt-2"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handlechange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm md:text-base  md:tracking-wider md:mt-2 font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="postalcode"
                  id="postalcode"
                  autoComplete="postal-code"
                  value={formData.postalcode}
                  onChange={handlechange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm md:text-base  md:tracking-wider md:mt-2 font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="message"
                    id="message"
                    autoComplete="message"
                    value={formData.message}
                    onChange={handlechange}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start gap-x-6">
            <button
              type="button"
              onClick={handlecancel}
              className="text-[5vw] md:tracking-wider md:text-[1.5vw] font-semibold leading-6 text-white"
            >
              Cancel
            </button>
            <Button onClick={handleSubmit} btn={"send"} />
          </div>
        </form>
        <div className="w-[65vw] h-px mt-[1.5rem] md:w-px md:h-48 bg-white"></div>
        <div className="text-white text-[4.5vw] mt-[1.5rem]  md:mt-0 md:text-[1.5vw] font-medium tracking-wide md:leading-[3vw] md:tracking-wider">
          <h1 className="">Contact Information</h1>
          <p>77 Baker Street Bondowoso.87655</p>
          <h1>Call Us: +92 36 586 956</h1>
          <h1>We are open from Monday - Friday</h1>
          <p>8:00 am - 5:00 pm</p>
          <div className="flex flex-row items-center gap-5 md:flex-col md:items-start md:gap-2">
            <p>Follow Us</p>
            <div className="flex items-center gap-4">
              <Link to="www.facebook.com">
                <FaFacebook size={25} color="#25375B" />
              </Link>
              <Link to="www.twitter.com">
                <FaXTwitter size={25} color="#25375B" />
              </Link>
              <Link to="www.instagram.com">
                <FiInstagram size={25} color="#25375B" />
              </Link>
              <Link to="www.whatsapp.com">
                <IoLogoWhatsapp size={25} color="#25375B" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
