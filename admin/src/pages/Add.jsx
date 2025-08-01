import axios from "axios";
import { useState } from "react";
import { assets, url } from "../assets/assets";
import { toast } from "react-toastify";

const Add = () => {
    const [image, setImage] = useState(false);
    const [imagePreview, setImagePreview] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    async function onSubmitHandler(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const res = await axios.post(`${url}/api/food/add`, formData);

        if (res.data.success) {
            console.log(res);
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad",
            });
            setImage(false);
            setImagePreview(false);
            toast.success(res.data.message);
        } 
        else {
          toast.error(res.data.message);
        }
    }

    //  useEffect(() => {
    //    console.log(data);
    //  }, [data]);

    return (
        <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
            <form className="col-flex !gap-5" onSubmit={onSubmitHandler}>
                {/* add-image upload */}
                <div className="col-flex">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img
                            className="w-32 cursor-pointer"
                            src={imagePreview || assets.upload_area}
                            alt="image upload area"
                        />
                    </label>
                    <input
                        type="file"
                        id="image"
                        hidden
                        required
                        onChange={(event) => {
                            const file = event.target.files[0];
                            setImage(file);
                            setImagePreview(
                                URL.createObjectURL(file)
                            );
                        }}
                    />
                </div>
                {/* add-product name */}
                <div className="col-flex w-[max(40%,280px)]">
                    <p>Product name</p>
                    <input
                        type="text"
                        name="name"
                        placeholder="type here"
                        required
                        className="p-2.5 border"
                        onChange={onChangeHandler}
                        value={data.name}
                    />
                </div>
                {/* add-product description */}
                <div className="col-flex w-[max(40%,280px)]">
                    <p>Product description</p>
                    <textarea
                        name="description"
                        rows="6"
                        placeholder="Write product description here"
                        required
                        className="p-2.5 border"
                        onChange={onChangeHandler}
                        value={data.description}
                    ></textarea>
                </div>
                {/* add category and price */}
                <div className="flex gap-[30px]">
                    {/* add-product category */}
                    <div className="col-flex">
                        <p>Product category</p>
                        <select
                            name="category"
                            onChange={onChangeHandler}
                            className="max-w-[120px] p-2.5 border"
                        >
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure veg">Pure veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    {/* add-product price */}
                    <div className="col-flex">
                        <p>Product price</p>
                        <input
                            type="Number"
                            name="price"
                            placeholder="$20"
                            className="max-w-[120px] p-2.5 border"
                            onChange={onChangeHandler}
                            value={data.price}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="max-w-[120px] border-none p-2.5 bg-black text-white cursor-pointer"
                >
                    ADD
                </button>
            </form>
        </div>
    );
};

export default Add;
