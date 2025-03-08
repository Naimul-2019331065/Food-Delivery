import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    // max-md:flex max-md:flex-col max-md:gap-[35px]
    <div
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-[80px] mt-24"
      id="footer"
    >
      <div className="grid grid-cols-[2fr_1fr_1fr] w-[100%] gap-20 max-md:flex max-md:flex-col max-md:gap-[35px]">
        {/* ####### footer content left left ############# */}
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="Comapy logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            temporibus a culpa porro dignissimos quia cupiditate nulla ipsum
            quis odio.
          </p>
          <div className="flex">
            <img
              className="w-10 mr-4"
              src={assets.facebook_icon}
              alt="facebook icon"
            />
            <img
              className="w-10 mr-4"
              src={assets.twitter_icon}
              alt="twitter icon"
            />
            <img
              className="w-10 mr-4"
              src={assets.linkedin_icon}
              alt="linkdin icon"
            />
          </div>
        </div>
        {/* ######## Footer content center ########### */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl">Company</h2>
          <ul className="">
            <li className="mb-2.5 cursor-pointer">Home</li>
            <li className="mb-2.5 cursor-pointer">About Us</li>
            <li className="mb-2.5 cursor-pointer">Delivery</li>
            <li className="mb-2.5 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        {/* ######## Footer Content right */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl">Get In Tounch</h2>
          <ul>
            <li className="mb-2.5 cursor-pointer">+880 1372893765</li>
            <li className="mb-2.5 cursor-pointer">dummy@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="h-0.5 my-4 bg-gray-700 w-[100%]" />
      <footer className="max-md:text-center">
        Copyright 2025 &copy; Tomato.com - All Right Reserved
      </footer>
    </div>
  );
};

export default Footer;
