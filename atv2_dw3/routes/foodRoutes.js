import express from "express";
const foodRoutes = express.Router();
import foodController from "../controllers/foodController.js";
import Auth from "../middlewares/Auth.js";
import RestaurantAuth from "../middlewares/RestaurantAuth.js";

foodRoutes.get('/foods', Auth.Authorization, foodController.getAllFoods);
foodRoutes.get('/foods/restaurant', Auth.Authorization, foodController.getAllFoodsWithRestaurant);
foodRoutes.post('/foods', Auth.Authorization, RestaurantAuth.RestaurantAuthorization, foodController.createFood);
foodRoutes.delete('/foods/:id', Auth.Authorization, RestaurantAuth.RestaurantAuthorization, foodController.deleteFood);
foodRoutes.put('/foods/:id', Auth.Authorization, RestaurantAuth.RestaurantAuthorization, foodController.updateFood);
foodRoutes.get('/foods/:id', Auth.Authorization, foodController.getOneFood);

export default foodRoutes;