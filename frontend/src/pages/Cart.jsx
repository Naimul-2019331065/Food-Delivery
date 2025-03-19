import React, { useContext } from "react";
import { StoreContext } from "../Contexts/StoreContext";

export const Cart = () => {
  const { CartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    // cart
    <div className="animate-fadeIn0_5 mt-[100px]">
      {/* cart items */}
      <div>
        {/* cart items title */}
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          // console.log("in the cart", item);
          // console.log(CartItems);
          if (CartItems && CartItems[item._id] > 0) {
            return (
              <div>
                <div className="my-2.5 text-black grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center">
                  <img src={item.image} alt="food image" className="w-[50px]" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{CartItems[item._id]}</p>
                  <p>${CartItems[item._id] * item.price}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                  >
                    X
                  </p>
                </div>
                <hr className="bg-[#e2e2e2] h-0.5 border-none" />
              </div>
            );
          }
        })}
      </div>
      {/* Cart bottom */}
      <div className="mt-20 flex justify-between gap-[max(12vw,20px)] max-md:flex-col-reverse">
        {/* Cart Total */}
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            {/* Subtotal */}
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5" />
            {/* Delivery fee */}
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr className="my-2.5" />

            {/* Total */}
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className="text-white bg-orange-500 w-[max(15vw,200px)] py-3 border rounded">
            Proceed to checkout
          </button>
        </div>
        {/* Promocode */}
        <div className="flex-1 max-md:justify-start">
          <div>
            <p className="text-[#555]">
              If you have a promo cede, Enter it here
            </p>
            {/* promoceode input */}
            <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] bordee rounded">
              <input
                type="text"
                placeholder="promo code"
                className="bg-transparent pl-2.5 outline-none"
              />
              <button className="w-[max(10vh,150px)] py-3 px-[5px] text-white bg-black border-none rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
