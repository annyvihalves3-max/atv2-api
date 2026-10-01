import express from "express";
const userRoutes = express.Router();
import userController from "../controllers/userController.js";
import Auth from "../middlewares/Auth.js";

userRoutes.get('/users', userController.getAllUser);
userRoutes.post('/createUser', userController.createUser);
userRoutes.post('/loginUser', userController.loginUser);
userRoutes.delete('/deleteUser/:id', Auth.Authorization, userController.deleteUser);

export default userRoutes;