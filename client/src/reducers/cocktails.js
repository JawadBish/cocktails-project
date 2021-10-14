import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from '../constants/actionTypes'

const cocktailsReducer = (cocktails = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload

        case CREATE:
            return [...cocktails, action.payload];
        default:
            return cocktails;
    };
}

export default cocktailsReducer;