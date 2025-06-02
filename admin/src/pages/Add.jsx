import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { use } from "react";

const Add = () => {
  const [image, setImage] = useState(false);
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

  //  useEffect(() => {
  //    console.log(data);
  //  }, [data]);

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
      <form className="col-flex !gap-5">
        {/* add-image upload */}
        <div className="col-flex">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-32"
              src={image ? image : assets.upload_area}
              alt="image upload area"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(event) => {
              setImage(URL.createObjectURL(event.target.files[0]));
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
