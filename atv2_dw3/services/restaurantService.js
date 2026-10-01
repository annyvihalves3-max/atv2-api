import Restaurant from "../models/Restaurant.js";

class restaurantService {
    async getAll() {
        try {
            const restaurants = await Restaurant.find().select("-password");
            return restaurants;
        } catch (error) {
            console.log(error);
        }
    }
    async Create(cnpj, name, email, telephone, password, address) {
        try {
            const newRestaurant = new Restaurant({cnpj, name,email,telephone,password,address });
            await newRestaurant.save();
        } catch (error) {
            console.log(error);
        }
    }
    async getOne(id) {
        try {
            const restaurant = await Restaurant.findOne({ _id: id}).select("-password");
            return restaurant;
        } catch (error) {
            console.log(error);
        }
    }
    async getByCnpj(cnpj) {
    try {
        const restaurant = await Restaurant.findOne({ cnpj });
        return restaurant;
    } catch (error) {
        console.log(error);
    }
}
    async delete(id) {
        try {
            await Restaurant.findByIdAndDelete(id);
            console.log(`O restaurante com a id ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }

    }
};

export default new restaurantService();
