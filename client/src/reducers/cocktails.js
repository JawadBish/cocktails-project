import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from '../constants/actionTypes'

const cocktailsReducer = (cocktails = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...cocktails, action.payload];
        case LIKE:
            return cocktails.map((cocktail) => (cocktails._id === action.payload._id ? action.payload : cocktail));
        case UPDATE:
            return cocktails.map((cocktail) => (cocktail._id === action.payload._id ? action.payload : cocktail));
        case DELETE:
            return cocktails.filter((cocktail) => cocktail._id !== action.payload);
        default:
            return cocktails;
    };
}

export default cocktailsReducer;