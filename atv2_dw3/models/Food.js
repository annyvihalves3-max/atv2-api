import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    amount: Number,
    descriptions: String
});

const Food = mongoose.model("Food", foodSchema)

export default Food;