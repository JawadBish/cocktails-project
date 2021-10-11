import mongoose from "mongoose";
import InstanceCocktail from "../models/instanceCocktail.js";


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