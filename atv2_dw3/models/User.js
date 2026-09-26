import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cpf: String,
    telephone: Number
});

const User = mongoose.model('User', userSchema);

export default User;