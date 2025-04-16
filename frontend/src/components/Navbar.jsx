import React, { useContext, useState } from "react";

import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../Contexts/StoreContext";
function Navbar({onsetShowLogin}) {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <nav className="sticky top-0 z-50 bg-white py-5 mx-auto flex items-center justify-between shadow-sm">
      <Link to={"/"}>
        <img
          src={assets.logo}
          alt="logo"
          onClick={() => {
            setMenu("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="w-[150px] max-[1050px]:w-[140px] max-[900px]:w-[120px] cursor-pointer"
        />
      </Link>
      <ul className="font-outfit flex gap-5 uppercase text-[#49557e]  max-[1050px]:text-[15px] max-[900px]:gap-[15px] max-[900px]:text-[14px] max-[750px]:hidden">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={
            menu === "home"
              ? "border-b-2 border-[#49775e] cursor-pointer"
              : " cursor-pointer"
          }
        >
          home
        </Link>
        <a
          href="#exploreMenu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "border-b-2 border-[#49775e] cursor-pointer"
              : " cursor-pointer"
          }
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "border-b-2 border-[#49775e] cursor-pointer"
              : " cursor-pointer"
          }
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={
            menu === "contact us"
              ? "border-b-2 border-[#49775e] cursor-pointer"
              : " cursor-pointer"
          }
        >
          contact us
        </a>
      </ul>
      <div className="flex items-center gap-10 max-[1050px]:gap-8 max-[900px]:gap-5">
        <img
          src={assets.search_icon}
          alt="search icon"
          className="max-[1050px]:w-[22px] max-[900px]:w-5"
        />
        <div className="relative">
          <Link to={"/Cart"}>
            {" "}
            <img
              src={assets.basket_icon}
              alt="basket icon"
              className="max-[900px]:w-5 max-[1050px]:w-[22px] w-6 cursor-pointer"
            />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "absolute bg-red-500 min-h-[10px] min-w-[10px] border rounded-[5px] -top-2 -right-2"
            }
          ></div>
        </div>
        <button
          className="text-base bg-transparent text-[#49557e] border-[1px] border-solid border-red-400
            rounded-[50px] py-[8px] px-[25px] cursor-pointer transition duration-300 max-[1050px]:py-1.5 max-[900px]:py-[5] max-[900px]:px-5 max-[900px]:text-[15px] hover:bg-[#fff4f2]"
          onClick={() => {
            onsetShowLogin(true);
          }}
        >
          sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
