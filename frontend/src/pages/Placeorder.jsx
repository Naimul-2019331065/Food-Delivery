import React, { useContext } from "react";
import { StoreContext } from "../Contexts/StoreContext";

const Placeorder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="flex items-start justify-between gap-[100px] mt-[100px] max-md:flex-col">
      {/* ######################## place order left ########################## */}
      <div className="w-[100%] max-w-[max(30%,500px)]">
        <p className="text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        {/* Name */}
        <div className="flex gap-2.5">
          <input
            className="mb-[15px] w-[100%] p-[10px] border rounded border-[#c5c5c5] outline-orange-500"
            type="text"
            placeholder="First name"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border rounded border-[#c5c5c5] outline-orange-500"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="mb-[15px] w-[100%] p-[10px] border rounded border-[#c5c5c5] outline-orange-500"
          type="email"
          placeholder="Email"
        />
        <input
          className="mb-[15px] w-[100%] p-[10px] border rounded border-[#c5c5c5] outline-orange-500"
          type="text"
          placeholder="Street"
        />
        {/* City and the state */}
        <div className="flex gap-2.5">
          <input
            className="mb-[15px] w-[100%] p-[10px] border rounded border-[#c5c5c5] outline-orange-500"
            type="text"
            placeholder="City"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border rounded border-[#c5c5c5] outline-orange-500"
            type="text"
            placeholder="State"
          />
        </div>
        {/* Zip code and Country */}
        <div className="flex gap-2.5">
          <input
            className="mb-[15px] w-[100%] p-[10px] border rounded border-[#c5c5c5] outline-orange-500"
            type="text"
            placeholder="Zip code"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border rounded border-[#c5c5c5] outline-orange-500"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="mb-[15px] w-[100%] p-[10px] border rounded border-[#c5c5c5] outline-orange-500"
          type="text"
          placeholder="Phone"
        />
      </div>
      {/* ######################## place order Right ########################## */}
      <div className="w-[100%] max-w-[40%,500px]">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-[24px] font-semibold">Cart Totals</h2>
          <div>
            {/* Subtotal */}
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5" />
            {/* Delivery fee */}
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-2.5" />

            {/* Total */}
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 2)}
              </b>
            </div>
          </div>
          <button
            // onClick={() => navigate("/order")}
            className="text-white bg-orange-500 w-[max(15vw,200px)] py-3 border rounded mt-7"
          >
            Proceed to payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
