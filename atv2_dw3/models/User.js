import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String
});

const User = mongoose.model('User', userSchema);

export default User;