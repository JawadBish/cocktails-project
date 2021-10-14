import express from 'express';
import { getAllCocktails, createCocktail, updateCocktail, likeCocktail, deleteCocktail } from '../controllers/cocktails.js';

const router = express.Router();


router.get('/', getAllCocktails);
router.post('/', createCocktail);
router.patch('/:id', updateCocktail);
router.delete('/:id', deleteCocktail);
router.patch('/:id/likecocktail', likeCocktail);




export default router;