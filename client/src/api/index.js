import axios from 'axios';


//not related to redux

const url = 'http://localhost:5000/cocktails';
const fetchAllCocktails = () => axios.get(url);