import Food from "../models/Food.js";

class foodService {
    async getAll() {
        try {
            const foods = await Food.find();
            return foods;
        } catch (error) {
            console.log(error);
        }
    }
    async getAllWithRestaurant() {
        try {
        const foods = await Food.find().populate("restaurantId");
        return foods;
        } catch (error) {
        console.log(error);
        }
    }

    async Create(name, price, amount, descriptions, image, restaurantId) {
        try {
            const newFood = new Food({ name, price, amount, descriptions, image, restaurantId });
            await newFood.save();
        } catch (error) { 
            console.log(error);
        }
    }

    async delete(id) {
        try {
            await Food.findByIdAndDelete(id);
            console.log(`Alimento com ID ${id} deletado com sucesso!`);
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, name, price, amount, descriptions, image) {
        try {
            await Food.findByIdAndUpdate(id, { name, price, amount, descriptions, image });
            console.log(`Alimento com ID ${id} atualizado com sucesso!`);
        } catch (error) {
            console.log(error);
        }
    }

    async getOne(id) {
        try {
            const food = await Food.findById({ _id: id });
            return food;
        } catch (error) {
            console.log(error);
        }
    };
};

export default new foodService();