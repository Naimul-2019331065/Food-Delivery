import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://nhnahin:nahin1234@cluster0.qacr5th.mongodb.net/food-del"
    )
    .then(() => {
      console.log("db connected succesfully");
    }).catch((error)=>{
        console.log(error);
    });
};
