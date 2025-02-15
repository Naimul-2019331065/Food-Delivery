import React from "react";

const Header = () => {
  return (
    <div className="h-[34vw] my-[30px] mx-auto bg-[url(/header_img.png)] bg-no-repeat bg-contain relative ">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] left-[6vw] bottom-[10%] animate-fadeIn3">
        <h2 className="text-white text-[4.5vw] font-[500]">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
          placeat optio nulla dolores nemo corrupti eum quisquam, tenetur
          soluta? Sequi.
        </p>
        <button
          className="bg-white text-[#747474] border-none rounded-[50px] px-[2.3vw] py-[1.3vw] text-1vw font-[500] 
        transition duration-300 hover:bg-blue-100"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
