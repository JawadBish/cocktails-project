import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_COCKTAIL } from '../constants/actionTypes'

const cocktailsReducer = (state = { isLoading: true, cocktails: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return {
                ...state,
                cocktails: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return {
                ...state,
                cocktails: action.payload,

            };
        case FETCH_COCKTAIL:
            return {
                ...state,
                cocktail: action.payload.cocktail
            };
        case CREATE:
            return {
                ...state,
                cocktails: [...state.cocktails, action.payload]
            };
        case UPDATE:
        case LIKE:
            return {
                ...state,
                cocktails: state.cocktails.map((cocktail) => cocktail._id === action.payload._id ? action.payload : cocktail)

            };
        case DELETE:
            return {
                ...state,
                cocktails: state.cocktails.filter((cocktail) => cocktail._id !== action.payload)
            };
        default:
            return state;
    };
}

export default cocktailsReducer;