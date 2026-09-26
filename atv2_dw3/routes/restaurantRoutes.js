import express from "express";
const restaurantRoutes = express.Router();
import restaurantController from "../controllers/restaurantController.js";

restaurantRoutes.get('/restaurants', restaurantController.getAllRestaurants);
restaurantRoutes.post('/createRes', restaurantController.createRestaurant);
restaurantRoutes.post('/loginRes', restaurantController.loginRestaurant);
restaurantRoutes.delete('/deleteRes/:id', restaurantController.deleteRestaurant);


export default restaurantRoutes;