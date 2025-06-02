import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const LoginPopup = ({ onsetShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");

    return (
        <div className="absolute z-20 w-[100%] h-[100%] bg-[#00000090] grid">
            <form
                action=""
                className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] border rounded-lg text-[14px] animate-fadeIn0_5"
            >
                {/* login pop up title */}
                <div className="flex justify-between items-center text-black">
                    <h2>{currState}</h2>
                    <img
                        className="w-4 cursor-pointer"
                        src={assets.cross_icon}
                        alt="cross icon"
                        onClick={() => {
                            onsetShowLogin(false);
                        }}
                    />
                </div>
                {/* Login pop up input */}
                <div className="flex flex-col gap-5">
                    {currState === "Sign Up" ? (
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="outline-none border border-[#c9c9c9] rounded p-2.5 text-gray-700"
                        />
                    ) : (
                        <></>
                    )}
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="outline-none border border-[#c9c9c9] rounded p-2.5 text-gray-700"
                    />
                    <input 
                        type="password"
                        placeholder="Enter Password"
                        className="outline-none border border-[#c9c9c9] rounded p-2.5 text-gray-700"
                    />
                </div>
                <button className="border-none p-2.5 rounded text-white bg-orange-500 text-[15px] cursor-pointer">
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>
                {/* Login pop up condition */}
                <div className="flex items-start gap-2 mt-[-15px]">
                    <input
                        type="checkbox"
                        required
                        className="mt-[5px] accent-orange-600"
                    />
                    <p>
                        By continuing, I agree to the terms of use & privacy
                        policy.
                    </p>
                </div>
                {currState === "Sign Up" ? (
                    <p>
                        Already have an account?{" "}
                        <span
                            className="font-[500] text-orange-500 cursor-pointer"
                            onClick={() => setCurrState("Login")}
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p>
                        Create a new account?{" "}
                        <span
                            className="font-[500] text-orange-500 cursor-pointer"
                            onClick={() => setCurrState("Sign Up")}
                        >
                            Click here
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
