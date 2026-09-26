import User from '../models/User.js';

class userService {
    async Create(name, email, password, cpf, telephone) {
        try {
            const newUser = new User({name, email, password, cpf, telephone });
            await newUser.save();
        } catch (error) { 
            console.log(error);
        }
    }
    async getOne(email) {
        try {
            const user = await User.findOne({ email: email});
            return user;
        } catch (error) {
            console.log(error);
        }
    }
};

export default new userService();