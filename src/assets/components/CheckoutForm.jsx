import React, { useState, useEffect } from "react";
import Button from "./Button";
import Truckloader from "./Truckloader";

const CheckoutForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutdata, setCheckoutdata] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zipcode: "",
    email: "",
    cardInfo: "",
    expiryDate: "",
    cvc: "",
    cod: false,
  });

  useEffect(() => {
    document.title = "TechMart - Check Out Form";
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCheckoutdata((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleProceed = (event) => {
    event.preventDefault();
    console.log("Proceed button clicked");

    const isEmpty = Object.values(checkoutdata).every(
      (value) => value === "" || value === false
    );
    if (isEmpty) {
      alert("Please provide checkout info");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem("checkoutdata", JSON.stringify(checkoutdata));
      setCheckoutdata({
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        zipcode: "",
        email: "",
        cardInfo: "",
        expiryDate: "",
        cvc: "",
        cod: false,
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="popup-container w-full h-full md:mt-0">
      <div className="checkout w-[90vw] h-[90vh] overflow-scroll md:overflow-hidden md:h-auto md:w-4/5 mx-auto py-4 px-4 md:px-10">
        <div className="w-full flex flex-col md:flex-row md:gap-5 items-center justify-around">
          <form action="" className="w-full md:w-3/5">
            <div className="w-full">
              <h2 className="text-4xl font-bold md:text-3xl lg:text-4xl text-white tracking-wider">
                Checkout
              </h2>
              <p className="text-xl md:text-lg lg:text-base font-medium mt-4 uppercase text-gray-600 md:tracking-wide">
                Shipping Information
              </p>
              <div className="mt-10 grid grid-cols-1 md:gap-x-4 md:gap-y-7 md:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="firstname"
                    className="block text-sm md:text-base font-medium tracking-wide text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      autoComplete="given-name"
                      onChange={handleChange}
                      value={checkoutdata.firstname}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="lastname"
                    className="block text-sm md:text-base font-medium tracking-wide text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      autoComplete="family-name"
                      onChange={handleChange}
                      value={checkoutdata.lastname}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm md:text-base font-medium tracking-wide text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Street Address or P.O. Box"
                      autoComplete="address"
                      onChange={handleChange}
                      value={checkoutdata.address}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:tracking-wider focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="city"
                    className="block text-sm md:text-base font-medium tracking-wide text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="city"
                      value={checkoutdata.city}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="zipcode"
                    className="block text-sm md:text-base font-medium tracking-wide text-gray-900"
                  >
                    ZIP code
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      autoComplete="ZipCode"
                      value={checkoutdata.zipcode}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="firstname"
                    className="block text-sm md:text-base font-medium tracking-wide text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={checkoutdata.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="hidden md:block md:mt-20 bg-white md:w-px md:h-60"></div>
          <form action="" className="w-full md:w-3/5">
            <div className="md:mt-7">
              <p className="text-xl md:text-lg lg:text-base font-medium mt-4 uppercase text-gray-600 md:tracking-wide">
                Payment details
              </p>
              <div className="mt-10 grid grid-cols-1 md:gap-x-4 md:gap-y-7 md:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="cardInfo"
                    className="block text-sm md:text-base font-medium tracking-wide text-gray-900"
                  >
                    Card Information
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cardInfo"
                      id="cardInfo"
                      value={checkoutdata.cardInfo}
                      onChange={handleChange}
                      disabled={checkoutdata.cod}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="expiryDate"
                    className="block text-sm md:text-base font-medium tracking-wide text-gray-900"
                  >
                    Expiry Date
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expiryDate"
                      id="expiryDate"
                      placeholder="MM / YY"
                      value={checkoutdata.expiryDate}
                      onChange={handleChange}
                      disabled={checkoutdata.cod}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:tracking-widest focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="cvc"
                    className="block text-sm md:text-base font-medium tracking-wide text-gray-900"
                  >
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="CVC"
                      value={checkoutdata.cvc}
                      onChange={handleChange}
                      disabled={checkoutdata.cod}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:tracking-widest focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6 mt-4">
                  <label
                    htmlFor="payment-on-delivery"
                    className="inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="cod"
                      name="cod"
                      value={checkoutdata.cod}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-base text-gray-900">
                      Cash on Delivery (COD)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center gap-6 justify-end">
          <button
            onClick={onClose}
            className="font-bold px-8 py-2 text-white tracking-widest hover:text-[#314f79] hover:bg-white"
          >
            Cancel
          </button>
          <Button onClick={handleProceed} btn="Proceed" />
          {isLoading && <Truckloader />}
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
