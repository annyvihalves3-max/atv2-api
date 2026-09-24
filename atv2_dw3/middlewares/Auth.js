import jwt from "jsonwebtoken";
import restaurantController from "../controllers/restaurantController.js";

const Authorization = (req, res, next) => {
    const authToken = req.headers["authorization"];
    if (authToken != undefined){
        const bearer = authToken.split(' ');
        const token = bearer[1];
        jwt.verify(token, restaurantController.JWTSecret, (error, data) => {
            if (error) {
                res.status(401).json({error: "Token inválido"});
            } else {
                req.token = token;
                req.loggedUser = {
                    id: data.id,
                    email: data.email,
                };
                next();
            }
        });
    } else {
        res.status(401).json({error: "Token não informado."})
    }
};

export default {Authorization};