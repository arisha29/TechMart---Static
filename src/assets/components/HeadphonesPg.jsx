import React, { useEffect } from "react";
import img1 from "../products/headphones/Nirvana-Eutopia.jpg";
import img2 from "../products/headphones/nirvanaa-751 anc.jpg";
import img3 from "../products/headphones/rockera-551anc.jpg";
import img4 from "../products/headphones/rockerz-450R.jpg";
import img5 from "../products/headphones/rockerz-600.jpg";
import img6 from "../products/headphones/rockid rush.jpg";
import Button from "./Button";

const HeadphonesPg = () => {
  useEffect(() => {
    document.title = "TechMart - Headphones";
  }, []);

  const HeadphoneList = [
    { id: 1, title: "NIRVANA EUTOPIA", img: img1, price: "$89.77" },
    { id: 2, title: "NIRVANA 751ANC", img: img2, price: "$95.76" },
    { id: 3, title: "ROCKERA 551ANC", img: img3, price: "$95.76" },
    { id: 4, title: "ROCKERZ 450R", img: img4, price: "$47.82" },
    { id: 5, title: "ROCKERZ 600", img: img5, price: "$59.81" },
    { id: 6, title: "ROCKID RUSH", img: img6, price: "$29.95" },
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
      {HeadphoneList.map((product) => (
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

export default HeadphonesPg;
