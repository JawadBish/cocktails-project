import axios from 'axios';


//not related to redux

const url = 'http://localhost:5000/cocktails';

export const fetchAllCocktails = () => axios.get(url);