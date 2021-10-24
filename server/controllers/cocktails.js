import mongoose from "mongoose";
import InstanceCocktail from "../models/instanceCocktail.js";
import express from 'express';

const router = express.Router();

//because it getting all data, we need to have await, and call should be async.
export const getAllCocktails = async (req, res) => {
    try {
        const Cocktails = await InstanceCocktail.find();
        res.status(200).json(Cocktails)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export const createCocktail = async (req, res) => {
    const cocktail = req.body; //this we will get from frontend form
    const newCocktail = new InstanceCocktail(cocktail);
    try {
        await newCocktail.save();
        res.status(201).json(newCocktail);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCocktail = async (req, res) => {
    const { id: _id } = req.params;
    //const { name, recipe, ingredients, creator, selectedFile, tags } = req.body;
    const cocktail = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No Cocktail with id: ${id}`);

    const updatedCocktail = await InstanceCocktail.findByIdAndUpdate(_id, cocktail, { new: true });

    res.json(updatedCocktail);
}

export const deleteCocktail = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Cocktail with id: ${id}`);

    await InstanceCocktail.findByIdAndRemove(id);

    res.json({ message: "Cocktail deleted successfully." });
}

export const likeCocktail = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Cocktail with id: ${id}`);

    const cocktail = await InstanceCocktail.findById(id);

    const index = cocktail.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        cocktail.likes.push(req.userId);
    } else {
        cocktail.likes = cocktail.likes.filter((id) => id !== String(req.userId));
    }

    const updateCocktail = await InstanceCocktail.findByIdAndUpdate(id, cocktail, { new: true });

    res.json(updateCocktail);
}


export default router;