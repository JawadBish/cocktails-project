import express from 'express';
import { getAllCocktails } from '../controllers/cocktails.js';

const router = express.Router();

//Get ALL COCKTAILS
router.get('/', getAllCocktails);




export default router;