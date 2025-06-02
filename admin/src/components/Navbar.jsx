import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <img src={assets.logo} alt="toamto logo" className="w-[max(10%,80px)]" />
      <img src={assets.profile_image} alt="admin profile" className="w-10" />
    </div>
  );
};

export default Navbar;
