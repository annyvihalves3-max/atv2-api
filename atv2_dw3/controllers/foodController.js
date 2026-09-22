import foodService from "../services/foodService.js";

import {objectId} from "mongodb";

const getAllFoods = async (req, res) => {
    try {
        const foods = await foodService.getAll();
        res.status(200).json({food: foods});
    } catch (error) {
        console.log (error);
        res.status(500).json({error: "Erro ao buscar alimentos. Erro interno do servidor."});
    }
};

const createFood = async (req, res) => {
    try {
        const { name, descriptions, price, amount, image } = req.body;
        await foodService.Create(name, descriptions, price, amount, image);
        res.status(201).json({message: "Alimento criado com sucesso!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro ao criar alimento. Erro interno do servidor."});
    };
};

const deleteFood = async (req, res) => {
    try {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            await foodService.delete(id);
            res.status(200).json({message: "Alimento deletado com sucesso!"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro ao deletar alimento. Erro interno do servidor."});
    };
};

const updateFood = async (req, res) => {
    try {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            const { name, descriptions, price, amount, image } = req.body;
            await foodService.update(id, name, descriptions, price, amount, image);
            res.status(200).json({message: "Alimento atualizado com sucesso!"});
        } else {
            res.status(400).json({error: "ID inválido."});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro ao atualizar alimento. Erro interno do servidor."});
    }
};

const getOneFood = async (req, res) => {
    try {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            const food = await foodService.getOne(id);
            if (!food) {
                res.status(404).json({error: "Alimento não encontrado."});
            } else {
                res.status(200).json({food});
            }
        } else {
            res.status(400).json({error: "ID inválido."});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro ao buscar alimento. Erro interno do servidor."});
    }
};

export default { getAllFoods, createFood, deleteFood, updateFood, getOneFood };