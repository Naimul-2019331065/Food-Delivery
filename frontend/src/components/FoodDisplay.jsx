import React, { useContext } from "react";
import { StoreContext } from "../Contexts/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-7" id="food-display">
      <h2 className="text-[max(2vw,24px)] font-[600]">Top dishes near you!</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-7 gap-y-13">
        {food_list.map((item, index) => {
          // console.log(item)
          if (category === item.category || category === "All")
            return <FoodItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
