import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/library');

let db = mongoose.connection;

export default db;