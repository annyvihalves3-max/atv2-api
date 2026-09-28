import User from '../models/User.js';

class userService {
    async getAll() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            console.log(error);
        }
    }
    async Create(name, email, password, cpf, telephone) {
        try {
            const newUser = new User({name, email, password, cpf, telephone });
            await newUser.save();
        } catch (error) { 
            console.log(error);
        }
    }
};

export default new userService();