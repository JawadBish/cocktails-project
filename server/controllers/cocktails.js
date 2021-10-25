import mongoose from "mongoose";
import InstanceCocktail from "../models/instanceCocktail.js";
import express from 'express';

const router = express.Router();

//because it getting all data, we need to have await, and call should be async.
export const getAllCocktails = async (req, res) => {
    const { page } = req.query;
    try {
        const LIMIT = 9;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

        const total = await InstanceCocktail.countDocuments({});
        const allCocktails = await InstanceCocktail.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        res.json({ data: allCocktails, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getCocktail = async (req, res) => {
    const { id } = req.params;

    try {
        const cocktail = await InstanceCocktail.findById(id);
        res.status(200).json(cocktail);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCocktailBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const name = new RegExp(searchQuery, "i");    // i means ignore case
        const cocktailsBySearch = await InstanceCocktail.find({ $or: [{ name }, { tags: { $in: tags.split(',') } }] });
        res.json({ data: cocktailsBySearch })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const createCocktail = async (req, res) => {
    const cocktail = req.body; //this we will get from frontend form
    const newCocktail = new InstanceCocktail({ ...cocktail, creator: req.userId, createdAt: new Date().toISOString() });
    try {
        await newCocktail.save();
        res.status(201).json(newCocktail);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCocktail = async (req, res) => {
    const { id } = req.params;
    //const { name, recipe, ingredients, creator, selectedFile, tags } = req.body;
    const cocktailToupdate = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Cocktail with id: ${id}`);

    const updatedCocktail = await InstanceCocktail.findByIdAndUpdate(id, { ...cocktailToupdate, id }, { new: true });

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