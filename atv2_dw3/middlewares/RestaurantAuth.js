const RestaurantAuthorization = (req, res, next) => {

    if (req.loggedUser.type !== "restaurant") {
        return res.status(403).json({
            error: "Acesso permitido somente para restaurantes."
        });
    }

    next();
};

export default { RestaurantAuthorization };