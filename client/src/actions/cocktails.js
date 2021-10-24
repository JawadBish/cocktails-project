import * as api from '../api';
import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_COCKTAIL } from '../constants/actionTypes'

export const getCocktails = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchAllCocktails(page);
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }

}

export const getCocktail = (id) => async (dispatch) => {
    try {

        dispatch({ type: START_LOADING });

        const { data } = await api.fetchCocktail(id);

        dispatch({ type: FETCH_COCKTAIL, payload: { fact: data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getCocktailsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data: { data } } = await api.getCocktailsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }

}

export const createCocktail = (cocktail, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createCocktail(cocktail);
        dispatch({ type: CREATE, payload: data });
        history.push(`/cocktails/${data._id}`);
        history.push(`/cocktails/`);
    } catch (error) {
        console.log(error);
    }

}


export const updateCocktail = (id, cocktail) => async (dispatch) => {
    try {
        const { data } = await api.updateCocktail(id, cocktail);
        dispatch({ type: UPDATE, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message);
    }
};



export const likeCocktail = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeCocktail(id);
        dispatch({ type: LIKE, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteCocktail = (id) => async (dispatch) => {
    try {
        await api.deleteCocktail(id);
        dispatch({ type: DELETE, payload: id });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message);
    }
};