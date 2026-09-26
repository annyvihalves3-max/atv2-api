import Restaurant from "../models/Restaurant.js";

class restaurantService {
    async Create(cnpj, name, email, telephone, password, address) {
        try {
            const newRestaurant = new Restaurant({cnpj, name,email,telephone,password,address });
            await newRestaurant.save();
        } catch (error) {
            console.log(error);
        }
    }
    async getOne(cnpj) {
        try {
            const restaurant = await Restaurant.findOne({ cnpj: cnpj});
            return restaurant;
        } catch (error) {
            console.log(error);
        }
    }
};

export default new restaurantService();
