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
    async Create(name, descriptions, price, amount, image) {
        try {
            const newFood = new Food({ name, descriptions, price, amount, image });
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

    async update(id, name, descriptions, price, amount, image) {
        try {
            await Food.findByIdAndUpdate(id, { name, descriptions, price, amount, image });
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