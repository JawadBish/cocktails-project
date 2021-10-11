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