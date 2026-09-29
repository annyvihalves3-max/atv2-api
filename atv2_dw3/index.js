import fs from "fs";
import YAML from "yaml";
import swaggerUi from "swagger-ui-express";
import express from "express";
import mongoose from "./config/db-connection.js";
import Food from "./models/Food.js";
import User from "./models/User.js";
import Restaurant from "./models/Restaurant.js";
import userRoutes from "./routes/userRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', userRoutes);
app.use('/', foodRoutes);
app.use('/', restaurantRoutes);

const swaggerDocument = YAML.parse(fs.readFileSync("./docs/swagger.yaml", "utf8"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = process.env.PORT || 8080;
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciada com sucesso na porta " + port);
    }
});