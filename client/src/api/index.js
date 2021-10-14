import axios from 'axios';


//not related to redux

const url = 'http://localhost:5000/cocktails';

export const fetchAllCocktails = () => axios.get(url);
export const createCocktail = (newCocktail) => axios.post(url, newCocktail);
export const likeCocktail = (id) => axios.patch(`${url}/${id}/likecocktail`);
export const updateCocktail = (id, updatedCocktail) => axios.patch(`${url}/${id}`, updatedCocktail);
export const deleteCocktail = (id) => axios.delete(`${url}/${id}`);