import React, { useContext } from "react";
import { StoreContext } from "../Contexts/StoreContext";

export const Cart = () => {
  const {cartItems, food_list, removeFromCart} = useContext(StoreContext);
  return (
    // cart
    <div className="animate-fadeIn0_5">
      {/* cart items */}
      <div>
        {/* cart items title */}
        <div>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>
    </div>
  );
};
