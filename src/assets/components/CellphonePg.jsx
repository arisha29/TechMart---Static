import React, { useEffect } from "react";
import img1 from "../products/phones/Galaxy-note-10.jpeg";
import img2 from "../products/phones/galaxy-z-flip5.jpg";
import img3 from "../products/phones/galaxy-z-fold5.jpg";
import img4 from "../products/phones/samsung_galaxy_s23fe.jpg";
import img5 from "../products/phones/samsung-a32.jpg";
import img6 from "../products/phones/Samsung-Galaxy-S24-Ultra.jpg";
import Button from "../components/Button";

const CellphonePg = () => {
  useEffect(() => {
    document.title = "TechMart - Cellphones";
  }, []);

  const CellphoneList = [
    { id: 1, title: "GALAXY NOTE 10", img: img1, price: "$1101.00" },
    { id: 2, title: "GALAXY Z FLIP5", img: img2, price: "$484.00" },
    { id: 3, title: "GALAXY Z FOLD5", img: img3, price: "$1,800.00" },
    { id: 4, title: "GALAXY S23FE", img: img4, price: "$737.16" },
    { id: 5, title: "GALAXY A32", img: img5, price: "$273.29" },
    { id: 6, title: "GALAXY S24 ULTRA", img: img6, price: "$1564.22" },
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
    <div className="laptop-list mt-8 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {CellphoneList.map((product) => (
        <div
          key={product.id}
          className="laptop-item p-4 border rounded shadow-md hover:scale-95"
        >
          <div className="w-full h-[45vh]">
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
    </div>
  );
};

export default CellphonePg;
