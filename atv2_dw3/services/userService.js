import User from '../models/User.js';

class userService {
    async getAll() {
        try {
            const users = await User.find().select("-password");
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
    async getOne(email) {
        try {
            const user = await User.findOne({ email: email });
            return user;
        } catch (error) {
            console.log(error);
        }
    }
    async delete(id) {
        try {
            await User.findByIdAndDelete(id);
            console.log(`O usuário com a id ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }

    }
};

export default new userService();