import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = (props) => {
  const { catagory, setCatagory } = props;
  function handleClick(name) {
    setCatagory(prev=>{
        return name===prev?"All":name;
    })
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-[500] text-[#262626]">Explore Our Menu</h1>
      <p className="max-w-[60%] text-[#808080] text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at,
        dignissimos quasi maxime eos nam ut repellat praesentium. Voluptate ex
        corporis id cupiditate consectetur adipisci aut blanditiis.
      </p>
      <div className="flex flex-nowrap justify-between items-center gap-[30px] text-center overflow-x-scroll my-5 scrollbar-hide">
        {menu_list.map((item, index) => (
          <div key={index} className="cursor-pointer" onClick={()=>handleClick(item.menu_name)}>
            <img
              src={item.menu_image}
              alt="food image"
              className={`w-[7.5vw] min-w-20 border rounded-[50%] ${catagory===item.menu_name?"border-orange-600 border-4 p-0.5":""}`}
            />
            <p className="mt-2.5 text-[#747474] text-[max(1.4vw,16px)] ">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-2.5 h-0.5 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
