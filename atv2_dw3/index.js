import express from "express";
import mongoose from "./config/db-connection.js";
import Food from "./models/Food.js";
import User from "./models/User.js";
import Restaurant from "./models/Restaurant.js";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciada com sucesso na porta " + port);
    }
});