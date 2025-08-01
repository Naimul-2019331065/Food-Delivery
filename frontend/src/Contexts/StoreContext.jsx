import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [CartItems, setCartItems] = useState({});
    // login or not
    const [token, setToken] = useState("");

    const [food_list, setFoodList] = useState([]); 

    // backend api
    const url = "http://localhost:4000";

    // To handle add to cart and remove from cart
    // ############################################
    const addToCart = (itemId) => {
        if (!CartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // Get total cart amount
    // ############################################

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                let itemInfo = food_list.find(
                    (product) => product._id === item
                );
                console.log(itemInfo);
                totalAmount += itemInfo.price * CartItems[item];
            }
        }
        return totalAmount;
    };

    // load food list data from backend

    const fetchFoodList = async () => {
        const res = await axios.get(url + "/api/food/list");
        setFoodList(res.data.data);
    }

    useEffect(() => {
       
        async function loadData() {
            await fetchFoodList();
             if (localStorage.getItem("token")) {
                 setToken(localStorage.getItem("token"));
             }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        CartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    // useEffect(()=>{
    //   console.log(CartItems)
    // }, [CartItems])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
