import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets, food_list } from "../assets/frontend_assets/assets";
import { StoreContext } from "../Contexts/StoreContext";
function Navbar({ onsetShowLogin }) {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken, url } =
        useContext(StoreContext);
    const navigate = useNavigate();

    function onLogout() {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    async function handleaddall() {
        for (const data of food_list) {
            console.log(data.name);
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("price", Number(data.price));
            formData.append("category", data.category);

            // ✅ Convert imported image to Blob
            const imageResponse = await fetch(data.image);
            const imageBlob = await imageResponse.blob();

            // ✅ Extract filename from image URL (e.g., "food_1.png")
            const urlParts = data.image.split("/");
            const fileName = urlParts[urlParts.length - 1];

            // ✅ Create a File from Blob using the original name
            const imageFile = new File([imageBlob], fileName, {
                type: imageBlob.type,
            });

            // ✅ Append image to FormData
            formData.append("image", imageFile);

            try {
                const res = await axios.post(`${url}/api/food/add`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                console.log("✅ Food added:", data.name);
            } catch (error) {
                console.error("❌ Failed to add:", data.name, error);
            }
        }
    }

    return (
        <nav className="sticky top-0 z-10 bg-white py-5 mx-auto flex items-center justify-between shadow-sm">
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

            {/* <button
                onClick={handleaddall}
                className="text-base bg-transparent text-[#49557e] border-[1px] border-solid border-red-400
            rounded-[50px] py-[8px] px-[25px] cursor-pointer transition duration-300 max-[1050px]:py-1.5 max-[900px]:py-[5] max-[900px]:px-5 max-[900px]:text-[15px] hover:bg-[#fff4f2]"
            >
                Add all food Item
            </button> */}
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

                {!token ? (
                    <button
                        className="text-base bg-transparent text-[#49557e] border-[1px] border-solid border-red-400
            rounded-[50px] py-[8px] px-[25px] cursor-pointer transition duration-300 max-[1050px]:py-1.5 max-[900px]:py-[5] max-[900px]:px-5 max-[900px]:text-[15px] hover:bg-[#fff4f2]"
                        onClick={() => {
                            onsetShowLogin(true);
                        }}
                    >
                        sign in
                    </button>
                ) : (
                    <div className="relative group">
                        <img
                            src={assets.profile_icon}
                            alt="user profile photo"
                        />
                        <ul
                            className="absolute right-0 z-1 hidden group-hover:flex  flex-col  gap-2.5  bg-[#fff2ef]
                          py-3  px-7 pr-10  border rounded-sm border-orange-500 outline-2 outline-white list-none"
                        >
                            <li className="flex items-center gap-2.5 cursor-pointer hover:text-orange-500">
                                <img
                                    className="w-[20px]"
                                    src={assets.bag_icon}
                                    alt=""
                                />
                                <p>Orders</p>
                            </li>
                            <hr className="" />
                            <li
                                onClick={onLogout}
                                className="flex items-center gap-2.5 cursor-pointer hover:text-orange-500"
                            >
                                <img
                                    className="w-[20px]"
                                    src={assets.logout_icon}
                                    alt=""
                                />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
