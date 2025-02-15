import React, { useContext} from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../Contexts/StoreContext";

const FoodItem = ({ key, item }) => {
  // console.log(item);
  //   distructure of items information
  const { _id, name, description, price, image } = item;
  // track the item selected count
  const id = _id;

  // cartItems, addToCart and removeFrom cart funtionalitis from context
  // ##################################
  const {CartItems, addToCart, removeFromCart} = useContext(StoreContext);
  // console.log(CartItems[0])
  function handleClick(operation) {
    if (operation === "+") setItemCount((prev) => prev + 1);
    else setItemCount((prev) => prev - 1);
  }

  return (
    <div className="w-[100%] m-auto border rounded-2xl shadow-sm shadow-[#00000015] animate-fadeIn1">
      {/* Food Item Image */}
      <div className="relative">
        <img
          src={image}
          alt="food item image"
          className="w-[100%] border rounded-t-2xl"
        />
        {/* Item count increase or decrease */}
        {!CartItems[id] ? (
          <img
            className="absolute w-[35px] right-4 bottom-4 cursor-pointer border rounded-[50%]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="absolute flex items-center gap-2.5 right-4 bottom-4 border rounded-[50px] p-1.5 bg-white">
            <img
              className="cursor-pointer"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{CartItems[id]}</p>
            <img
              className="cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      {/* Food Item info */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-xl font-[500]">{name}</p>
          <img
            src={assets.rating_starts}
            alt="rating photo"
            className="w-[70px]"
          />
        </div>
        <p className="text-[12px] text-[#676767]">{description}</p>
        <p className="text-[22px] text-orange-600 font-[500] m-0">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
