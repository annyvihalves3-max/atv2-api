import express from "express";
const restaurantRoutes = express.Router();
import restaurantController from "../controllers/restaurantController.js";
import Auth from "../middlewares/Auth.js";
import RestaurantAuth from "../middlewares/RestaurantAuth.js";

restaurantRoutes.get('/restaurants', restaurantController.getAllRestaurants);
restaurantRoutes.post('/createRes', restaurantController.createRestaurant);
restaurantRoutes.post('/loginRes', restaurantController.loginRestaurant);
restaurantRoutes.delete('/deleteRes/:id', Auth.Authorization, RestaurantAuth.RestaurantAuthorization, restaurantController.deleteRestaurant);
restaurantRoutes.get('/restaurants/:id', restaurantController.getOneRestaurant);

export default restaurantRoutes;