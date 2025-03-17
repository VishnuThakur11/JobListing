import mongoose from "mongoose";
import dotenv from "dotenv"
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        // console.log(process.env.MONGO_URI);
        
        console.log("database connected successfully");

    } catch (error) {
        console.log("error from mongoose");

    }
}

export default connectDB;