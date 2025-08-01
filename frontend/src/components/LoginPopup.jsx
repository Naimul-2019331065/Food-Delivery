import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../Contexts/StoreContext";
import axios from "axios"

const LoginPopup = ({ onsetShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    const { url, setToken } = useContext(StoreContext);

    // from user
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    function onChangeHandler(e) {
        // console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        let newUrl = url + "/api/user/";

        newUrl += currState==="Login"?"login":"register";

        const res = await axios.post(newUrl, data);

        if(res.data.success) {
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token);
            onsetShowLogin(false);
        }
        else {
            alert(res.data.message);
        }
    }

    return (
        <div className="absolute z-20 w-[100%] h-[100%] bg-[#00000090] grid">
            <form
                onSubmit={onSubmitHandler}
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
                            name="name"
                            value={data.name}
                            onChange={onChangeHandler}
                            type="text"
                            placeholder="Your Name"
                            className="outline-none border border-[#c9c9c9] rounded p-2.5 text-gray-700"
                        />
                    ) : (
                        <></>
                    )}
                    <input
                        name="email"
                        value={data.email}
                        onChange={onChangeHandler}
                        type="email"
                        placeholder="Your Email"
                        className="outline-none border border-[#c9c9c9] rounded p-2.5 text-gray-700"
                    />
                    <input
                        name="password"
                        value={data.password}
                        onChange={onChangeHandler}
                        type="password"
                        placeholder="Enter Password"
                        className="outline-none border border-[#c9c9c9] rounded p-2.5 text-gray-700"
                    />
                </div>
                <button type="submit" className="border-none p-2.5 rounded text-white bg-orange-500 text-[15px] cursor-pointer">
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
                            onClick={() => {
                                setCurrState("Login");
                                setData({
                                    name: "",
                                    email: "",
                                    password: "",
                                });
                            }}
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p>
                        Create a new account?{" "}
                        <span
                            className="font-[500] text-orange-500 cursor-pointer"
                            onClick={() => {
                                setCurrState("Sign Up");
                                setData({
                                    name: "",
                                    email: "",
                                    password: "",
                                });
                            }}
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
