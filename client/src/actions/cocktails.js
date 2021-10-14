import * as api from '../api';
import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from '../constants/actionTypes'

export const getCocktails = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllCocktails();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }

}

export const createCocktail = (cocktail) => async (dispatch) => {
    try {
        const { data } = await api.createCocktail(cocktail);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }

}


export const updateCocktail = (id, cocktail) => async (dispatch) => {
    try {
        const { data } = await api.updateCocktail(id, cocktail);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};



export const likeCocktail = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeCocktail(id);
        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteCocktail = (id) => async (dispatch) => {
    try {
        await api.deleteCocktail(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};