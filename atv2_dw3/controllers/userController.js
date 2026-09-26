import dotenv from 'dotenv';
dotenv.config();

import userService from '../services/userService.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWTSecret = process.env.JWTSECRET;

const createUser = async (req, res) => {
    try {
        const { name, email, password, cpf, telephone } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        await userService.Create( name, email, hash, cpf, telephone );
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email != undefined) {
            const user = await userService.getOne(email);
            if (user != undefined) {
                const correct = bcrypt.compareSync(password, user.password);
                if (correct) {
                    jwt.sign({ id: user._id, email: user.email, type: "user" }, JWTSecret, { expiresIn: '48h' }, (error, token) => {
                        if (error) {
                            res.status(400).json({ error: 'Não foi possível gerar o token de autenticação.' });
                        } else {
                            res.status(200).json({token});
                        }
                    });
                } else {
                    res.status(401).json({ error: 'Senha incorreta.' });
                }
            } else {
                res.status(404).json({ error: 'Usuário não encontrado.' });
            }
        } else {
            res.status(400).json({ error: 'O e-mail enviado é inválido.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            await userService.delete(id);
            res.status(200).json({message: "Usuário deletado com sucesso!"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro ao deletar usuário. Erro interno do servidor."});
    };
};

export default { createUser, loginUser, deleteUser, JWTSecret};
