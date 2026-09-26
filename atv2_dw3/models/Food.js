import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    discountedPrice: Number,
    amount: Number,
    descriptions: String,
    image: String,
    expirationDate: Date,
    status: String,
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    }
});

const Food = mongoose.model("Food", foodSchema)

export default Food;