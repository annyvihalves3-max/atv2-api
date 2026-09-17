import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    road: String,
    neighborhood: String,
    number: String,
    city: String
});

const restaurantSchema = new mongoose.Schema({
    cnpj: Number,
    name: String,
    email: String,
    telephone: Number,
    address: addressSchema
});

const Restaurant = mongoose.model('Restaurante', restaurantSchema);

export default Restaurant;