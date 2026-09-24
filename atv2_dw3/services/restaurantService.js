import Restaurant from "../models/Restaurant.js";

class restaurantService {
    async Create(name, cnpj, password,telephone, email, address) {
        try {
            const newRestaurant = new Restaurant({name,cnpj,password,telephone,email,address });
            await newRestaurant.save();
        } catch (error) {
            console.log(error);
        }
    }
    async getOne(email) {
        try {
            const restaurant = await Restaurant.findOne({ email: email});
            return restaurant;
        } catch (error) {
            console.log(error);
        }
    }
};

export default new restaurantService();
