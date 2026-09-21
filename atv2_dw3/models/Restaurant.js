import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    road: String,
    neighborhood: String,
    number: String,
    city: String,
    stay: String
});

const restaurantSchema = new mongoose.Schema({
    cnpj: Number,
    name: String,
    email: String,
    telephone: Number,
    password: String,
    address: addressSchema
});

const Restaurant = mongoose.model('Restaurante', restaurantSchema);

export default Restaurant;