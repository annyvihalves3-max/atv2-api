import express from "express";
const foodRoutes = express.Router();
import foodController from "../controllers/foodController.js";
import Auth from "../middlewares/Auth.js";

foodRoutes.get('/foods', Auth.Authorization, foodController.getAllFoods);
foodRoutes.post('/foods', Auth.Authorization, foodController.createFood);
foodRoutes.delete('/foods/:id', Auth.Authorization, foodController.deleteFood);
foodRoutes.put('/foods/:id', Auth.Authorization, foodController.updateFood);
foodRoutes.get('/foods/:id', Auth.Authorization, foodController.getOneFood);

export default foodRoutes;