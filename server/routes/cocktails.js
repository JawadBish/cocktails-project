import express from 'express';
import { getAllCocktails, createCocktail, updateCocktail, likeCocktail, deleteCocktail, getCocktailBySearch, getCocktail } from '../controllers/cocktails.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getAllCocktails);
router.get('/search', getCocktailBySearch);
router.get('/:id', getCocktail);
router.post('/', auth, createCocktail);
router.patch('/:id', auth, updateCocktail);
router.delete('/:id', auth, deleteCocktail);
router.patch('/:id/likecocktail', auth, likeCocktail);




export default router;