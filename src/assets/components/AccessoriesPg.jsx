import React, { useEffect } from "react";
import img1 from "../products/accessories/glass-10.jpg";
import img2 from "../products/accessories/Phone-Case.jpg";
import img3 from "../products/accessories/travel-adapter.avif";
import img4 from "../products/accessories/battery-pack.avif";
import img5 from "../products/accessories/galaxy-z-flip5-silicone-case-with-ring.avif";
import img6 from "../products/accessories/wireless-charger-convertible.png";
import img7 from "../products/accessories/mx-mechnical-combo.jpg";
import img8 from "../products/accessories/pebble-2-combo.jpg";
import img9 from "../products/accessories/mx-keys-s-combo.jpg";
import banner from "../banner.jpg";
import Button from '../components/Button';

const AccessoriesPg = () => {
  useEffect(() => {
    document.title = "TechMart - Accessories";
  }, []);

  const accessoriesList = [
    {
      id: 1,
      title: "TEMPERED GLASS SCREEN PROTECTOR",
      img: img1,
      price: "$23.22",
    },
    {
      id: 2,
      title: "CRYSTAL CLEAR SHOCKPROOF CASE",
      img: img2,
      price: "$10.00",
    },
    {
      id: 3,
      title: "TRAVEL ADAPTER (45W)",
      img: img3,
      price: "$21.43",
    },
    {
      id: 4,
      title: "BATTERY PACK(10.0A 15W 2Port)",
      img: img4,
      price: "$22.86",
    },
    {
      id: 5,
      title: "Z-FLIP5 SILICON CASE WITH RING",
      img: img5,
      price: "$40.00",
    },
    {
      id: 6,
      title: "WIRELESS CHARGER CONVERTIBLE",
      img: img6,
      price: "$32.15",
    },
    { id: 7, title: "MX MECHANICAL COMBO", img: img7, price: "$244.98" },
    { id: 8, title: "PEBBLE 2 COMBO", img: img8, price: "$59.99" },
    { id: 9, title: "MX KEYS S COMBO", img: img9, price: "$199.99" },
  ];

  const handleAddToCart = (newItem) => {
    const cart = JSON.parse(localStorage.getItem("Cart-Item")) || [];
    const existingItem = cart.find((item) => item.id === newItem.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...newItem, quantity: 1 }];
    }
    cart.push(updatedCart);
    localStorage.setItem("Cart-Item", JSON.stringify(updatedCart));
    alert(`${newItem.title} has been added to the cart`);
  };

  return (
    <div className="laptop-list mt-8 sm:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {accessoriesList.map((product) => (
        <div
          key={product.id}
          className="laptop-item p-4 border rounded shadow-md hover:scale-95 transition-transform duration-200"
        >
          <div className="w-full h-[30vh] sm:h-[45vh]">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{product.title}</h3>
            <p className="text-gray-400 font-medium">{product.price}</p>
          </div>
          <Button
            onClick={() => {
              handleAddToCart(product);
            }}
            btn={"Add to cart"}
            className="mt-[1rem]"
          />
        </div>
      ))}
      <div className="w-full sm:w-[94vw] h-[30vh] sm:h-[60vh] rounded relative overflow-hidden">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 sm:p-8 text-white">
          <h1 className="text-xl tracking-wide md:text-[2vw] font-bold">
            Workspace Collection
          </h1>
          <p className="text-sm md:text-base sm:text-[1vw] text-gray-300 mt-2 md:tracking-wide">
            Upgrade your desk with objects that keep you organized and
            clear-minded.
          </p>
          <button className="border rounded py-2 sm:py-4 px-8 sm:px-16 font-medium text-sm sm:text-[1.1vw] mt-4 tracking-wide hover:bg-[#80808056]">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPg;
