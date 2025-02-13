import React, { useState } from "react";

import { assets } from "../assets/frontend_assets/assets";
function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <nav className="py-5 mx-auto flex items-center justify-between">
      <img src={assets.logo} alt="logo" className="w-[150px]" />
      <ul className="font-outfit flex gap-5 uppercase text-[#49557e]">
        <li
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "border-b-2 border-[#49775e] cursor-pointer"
              : " cursor-pointer"
          }
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "border-b-2 border-[#49775e] cursor-pointer"
              : " cursor-pointer"
          }
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "border-b-2 border-[#49775e] cursor-pointer"
              : " cursor-pointer"
          }
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={
            menu === "contact us"
              ? "border-b-2 border-[#49775e] cursor-pointer"
              : " cursor-pointer"
          }
        >
          contact us
        </li>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="search icon" />
        <div className="relative">
          <img src={assets.basket_icon} alt="basket icon" />
          <div className="absolute bg-red-500 min-h-[10px] min-w-[10px] border rounded-[5px] -top-2 -right-2"></div>
        </div>
        <button
          className="text-base bg-transparent text-[#49557e] border-[1px] border-solid border-red-400
            rounded-[50px] py-[8px] px-[25px] cursor-pointer transition duration-300 hover:bg-[#fff4f2]"
        >
          sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
