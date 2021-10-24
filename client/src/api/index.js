import axios from 'axios';


//not related to redux
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchCocktail = (id) => API.get(`/cocktails/${id}`);
export const fetchAllCocktails = (page) => API.get(`/cocktails?page=${page}`);
export const getCocktailsBySearch = (searchQuery) => API.get(`cocktails/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createCocktail = (newCocktail) => API.post('/cocktails', newCocktail);
export const updateCocktail = (id, updatedCocktail) => API.patch(`/cocktails/${id}`, updatedCocktail);
export const deleteCocktail = (id) => API.delete(`/cocktails/${id}`);
export const likeCocktail = (id) => API.patch(`/cocktails/${id}/likecocktail`);

export const signIn = (formData) => API.post('users/signin', formData);
export const signUp = (formData) => API.post('users/signup', formData);

//&ingredients=${searchQuery.ingredients}