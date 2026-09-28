import express from "express";
const userRoutes = express.Router();
import userController from "../controllers/userController.js";

userRoutes.get('/users', userController.getAllUser);
userRoutes.post('/createUser', userController.createUser);
userRoutes.post('/loginUser', userController.loginUser);
userRoutes.delete('/deleteUser/:id', userController.deleteUser);

export default userRoutes;