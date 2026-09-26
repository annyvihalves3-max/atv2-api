import restaurantService from '../services/restaurantService.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWTSecret = process.env.JWTSECRET;

const createRestaurant = async (req,res) => {
    try {
        const {cnpj, name, email, telephone, password, address} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        await restaurantService.Create( cnpj, name, email, telephone, hash, address);
        res.status(201).json({ message: 'Restaurante cadastrado com sucesso!'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error : "Erro ao cadastrar restaurante."})
    }
};

const loginRestaurant = async (req, res) => {
    try {
        const { cnpj, password } = req.body;
        if (cnpj != undefined) {
            const restaurant = await restaurantService.getOne(cnpj);
            if (restaurant != undefined) {
                const correct = bcrypt.compareSync(password, restaurant.password);
                if (correct) {
                    jwt.sign({ id: restaurant._id, cnpj: restaurant.cnpj }, JWTSecret, {
                        expiresIn: '1h' }, (error, token) => {
                            if (error) {
                                res.status(400).json({error: 'Não foi possível gerar o token de autentificação.'})
                        } else {
                                res.status(200).json({token});
                        }
                    });
                } else {
                        res.status(401).json({error:'Senha incorreta.'});
                }
            } else {
                    res.status(404).json({ error: 'Usuário não encontrado.'});
            }
        } else {
                res.status(400).json({ error: 'O cnpj enviado é inválido.'})
        }
    } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro interno do servidor."});
    };
};

const deleteRestaurant = async (req, res) => {
    try {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            await restaurantService.delete(id);
            res.status(200).json({message: "Restaurante deletado com sucesso!"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro ao deletar restaurante. Erro interno do servidor."});
    };
};

export default {createRestaurant, loginRestaurant, deleteRestaurant, JWTSecret};