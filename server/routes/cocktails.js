import express from 'express';
import { getAllCocktails, createCocktail } from '../controllers/cocktails.js';

const router = express.Router();

//Get ALL COCKTAILS
router.get('/', getAllCocktails);
router.post('/', createCocktail);
// router.get('/:id', getOneCocktail);
// router.patch('/:id', auth, updateCocktail);
// router.delete('/:id', auth, deleteCocktail);




export default router;