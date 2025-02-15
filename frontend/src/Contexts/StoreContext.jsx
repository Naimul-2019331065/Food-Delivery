import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [CartItems, setCartItems] = useState({});

  // To handle add to cart and remove from cart
  // ############################################
  const addToCart = (itemId) => {
    if (!CartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  // ############################################

  const contextValue = {
    food_list,
    CartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  useEffect(()=>{
    console.log(CartItems)
  }, [CartItems])
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
