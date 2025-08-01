import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../assets/assets";

const List = () => {
    const [list, setList] = useState([]);

    async function fetchList() {
        const res = await axios.get(`${url}/api/food/list`);
        // console.log(res.data.data);
        if (res.data.success) {
            setList(res.data.data);
        } else {
            toast.error("error");
        }
    }

    useEffect(() => {
        fetchList();
    }, []);

    async function handleOnRemove(foodId) {
      // console.log(foodId);
        const res = await axios.post(`${url}/api/food/remove`, {id:foodId});
        await fetchList();
        if(res.data.success) {
          toast.success(res.data.message);
        }
        else toast.error("Error");
    }

    return (
        <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px] flex flex-col gap-2.5">
            <p>All Food List</p>
            <div>
                <div
                    className="grid items-center gap-2.5 py-3 px-4 border border-[#cacaca] 
                text-[13px] grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] bg-[#f9f9f9] max-[600px]:grid-cols-[1fr_3fr_1fr] max-[600px]:gap-4 max-[600px]:hidden"
                >
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => (
                    <div
                        key={index}
                        className="grid items-center gap-2.5 py-3 px-4 border border-[#cacaca] 
                        text-[13px] grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] max-[600px]:grid-cols-[1fr_3fr_1fr] max-[600px]:gap-4 "
                    >
                        <img src={`${url}/images/` + item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <p onClick={()=>handleOnRemove(item._id)} className="cursor-pointer">X</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
