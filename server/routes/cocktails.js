import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Dummy  getAllCocktails API");
});

export default router;