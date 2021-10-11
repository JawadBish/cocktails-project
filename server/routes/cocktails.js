import express from 'express';
import { getAllCocktails, createCocktail } from '../controllers/cocktails.js';

const router = express.Router();

//Get ALL COCKTAILS
router.get('/', getAllCocktails);
router.get('/:id', getOneCocktail);
router.post('/', createCocktail);
router.patch('/:id', auth, updateCocktail);
router.delete('/:id', auth, deleteCocktail);




export default router;