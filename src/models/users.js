import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: Number, unique: true},
        username: {type: String, required: true},
        email: {type: String, required:true},
        password: {type: String, required:true}
    }
);