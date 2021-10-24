import axios from 'axios';


//not related to redux
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});


export const fetchAllCocktails = () => API.get('/cocktails');
export const createCocktail = (newCocktail) => API.post('/cocktails', newCocktail);
export const likeCocktail = (id) => API.patch(`/cocktails/${id}/likecocktail`);
export const updateCocktail = (id, updatedCocktail) => API.patch(`/cocktails/${id}`, updatedCocktail);
export const deleteCocktail = (id) => API.delete(`/cocktails/${id}`);

export const signIn = (formData) => API.post('users/signin', formData);
export const signUp = (formData) => API.post('users/signup', formData);