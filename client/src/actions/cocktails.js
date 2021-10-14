import * as api from '../api';
import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE  } from '../constants/actionTypes'

export const getCocktails = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllCocktails();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }

}