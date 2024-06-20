import React, { useEffect, useState } from "react";
import emptySVG from "../Empty-Cart.png";
import { MdClose } from "react-icons/md";
import CheckoutForm from "../components/CheckoutForm";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckoutform, setIsCheckoutform] = useState(false);

  useEffect(() => {
    document.title = "TechMart - Your Cart";
    const cart = JSON.parse(localStorage.getItem("Cart-Item")) || [];
    setCartItems(cart);
  }, []);

  const handleButtonClick = () => {
    setIsCheckoutform(true);
  };

  const handleClosePopup = () => {
    setIsCheckoutform(false);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("Cart-Item", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("Cart-Item", JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      let priceString = item.price.toString().replace(/[^0-9.-]+/g, "");
      const pricePerItem = parseFloat(priceString);
      const quantity = parseInt(item.quantity, 10);

      console.log(
        `Item: ${item.title}, Raw Price: ${item.price}, Parsed Price: ${pricePerItem}, Quantity: ${quantity}`
      );

      if (isNaN(pricePerItem) || isNaN(quantity)) {
        console.error(
          `Invalid price or quantity for item ${item.title}: price=${item.price}, quantity=${item.quantity}`
        );
        return total;
      }

      return total + pricePerItem * quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="cart-page mt-8 px-4 sm:px-10">
      {cartItems.length === 0 ? (
        <div className="empty-cart flex flex-col items-center gap-10 mb-10">
          <img
            src={emptySVG}
            alt="Empty svg"
            className="w-40 h-40 sm:w-80 sm:h-80 mb-4 text-gray-400"
          />
          <p className="text-lg sm:text-xl uppercase font-medium text-[#29456b] text-center px-4">
            Your cart is empty. Add products to see your list here!
          </p>
        </div>
      ) : (
        <div className="w-full sm:w-10/12 md:w-10/12 lg:w-10/12 mx-auto flex flex-col md:flex-row lg:flex-row justify-between gap-8">
          <div className="cartlist w-full lg:w-[65%]">
            <h1 className="font-[Bebas Neue] text-[5vw] font-semibold md:text-[4.5vw] lg:text-[4vw] text-[#29456b] tracking-wider">
              Your Cart
            </h1>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-col md:flex-row lg:flex-row justify-between py-3 md:py-0 border-b md:w-[40vw] md:mt-2"
              >
                <div className="flex items-center gap-6 md:gap-8 py-4 w-full md:w-[40vw] relative">
                  <div className="w-[200px] h-[200px] md:w-[200px] md:h-[200px]">
                    <img
                      src={item.img}
                      alt="Item Image"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <h4 className="text-lg md:text-2xl font-medium uppercase">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 font-medium md:tracking-wide">{item.price}</p>
                    <div className="flex items-center">
                      <h1 className="font-medium uppercase text-base tracking-wide md:text-xl mr-5">
                        Quantity
                      </h1>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="text-2xl md:text-3xl font-medium text-gray-400 mr-3"
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <h1 className="mr-2 sm:mr-3 font-medium text-xl">
                        {item.quantity}
                      </h1>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="text-2xl md:text-3xl font-medium text-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-lg sm:text-2xl font-medium text-gray-400 absolute top-0 right-0"
                  >
                    <MdClose size={30} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Receipt here */}
          <div className="receipt w-full lg:w-[350px] max-h-[50vh] overflow-y-auto bg-gray-200 p-4 rounded-lg">
            <div className="receipt-content">
              {cartItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between">
                    <h4 className="text-gray-500 text-sm md:text-base md:tracking-wide font-medium uppercase md:px-2 md:mb-1">
                      {item.title} {item.quantity > 1 && `(x${item.quantity})`}
                    </h4>
                    <p className="text-gray-500 font-medium md:tracking-wide">{item.price}</p>
                  </div>
                );
              })}
              <div className="w-full h-px bg-gray-600"></div>
              <div className="flex items-center justify-between p-2">
                <h4 className="text-gray-500 text-sm md:text-base md:tracking-wide font-medium uppercase">
                  Sales tax
                </h4>
                <p className="text-gray-500 font-medium uppercase text-sm md:text-base md:tracking-wide">
                  included
                </p>
              </div>
              <div className="w-full h-px bg-gray-600"></div>
              <div className="flex items-center justify-between p-2">
                <h4 className="text-black text-sm sm:text-base md:tracking-widest font-bold uppercase">
                  Total
                </h4>
                <p className="text-black font-bold text-sm md:text-base md:tracking-wide">${totalPrice.toFixed(2)}</p>
              </div>
              <button
                onClick={handleButtonClick}
                className="bg-black text-white py-2 px-8 md:px-[5.7rem] text-sm mt-5 font-medium tracking-widest"
              >
                PROCEED TO CHECKOUT
              </button>
              {isCheckoutform && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
                  <div className="p-8 rounded-lg">
                    <CheckoutForm onClose={handleClosePopup} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
