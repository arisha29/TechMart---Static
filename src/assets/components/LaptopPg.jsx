import React,{useEffect} from "react";
import img1 from "../products/laptops/hp_elitebook_x360.jpg";
import img2 from "../products/laptops/hp-envy.jpg";
import img3 from "../products/laptops/HP-Omen-gaming.jpg";
import img4 from "../products/laptops/hp-victus-16.jpg";
import img5 from "../products/laptops/omen-transcend.jpg";
import img6 from "../products/laptops/victus_15.jpg";
import Button from '../components/Button';

const LaptopPg = () => {

  useEffect(() => {
    document.title = "TechMart - Laptop";
  }, []);

  const laptopList = [
    { id: 1, title: "HP ENVY", img: img2, price: "$1,128.00" },
    { id: 2, title: "HP ELITEBOOK X360", img: img1, price: "$1,757.00" },
    { id: 3, title: "HP OMEN GAMING", img: img3, price: "$1,799.99" },
    { id: 4, title: "OMEN TRANSCEND", img: img5, price: "$1,099.99" },
    { id: 5, title: "HP VICTUS 16", img: img4, price: "$649.99" },
    { id: 6, title: "HP VICTUS 15", img: img6, price: "$799.99" },
  ];

   const handleAddToCart = (newItem) => {
     const cart = JSON.parse(localStorage.getItem("Cart-Item")) || [];
     const existingItem = cart.find((item) => item.id === newItem.id);
     let updatedCart;

     if (existingItem) {
       updatedCart = cart.map((item) =>
         item.id === newItem.id
           ? { ...item, quantity: item.quantity + 1 }
           : item
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
      {laptopList.map((product) => (
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

export default LaptopPg;