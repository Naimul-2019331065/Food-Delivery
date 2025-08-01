import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import "dotenv/config"



// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

// API's
app.get("/", (req, res)=>{
    res.send("api is working succesfully");
})



// server
app.listen(port, ()=>{
    console.log(`server is running on port ${port}...`);
})
