import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../models/userModel.js";

// token genarate
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await userModel.findOne({email});
        
        // check user email exist or not
        if(!user) {
            return res.json({success:false, message:"User not found"});
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({success:false, message:"wrong password"});
        }

        const token = createToken(user._id);
        res.json({success:true, token});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
};

// Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const exists = await userModel.findOne({ email });

        // checking if user email already exists
        if (exists) {
            return res.json({
                success: false,
                message: "User email already exists. Enter another Email.",
            });
        }

        // validating email formate
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Email is not valid. Enter a valid email.",
            });
        }

        // checking strong password
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Your password should be grater or equal 8 characters",
            });
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { loginUser, registerUser };
