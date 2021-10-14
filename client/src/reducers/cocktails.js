import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE  } from '../constants/actionTypes'

const cocktailsReducer = (cocktails = [] ,action) => {
    switch(action.type) {
        case FETCH_ALL: 
        return {           
            ...cocktails,
            cocktails: action.payload.data,   
        };
        default:
            return cocktails;
    };
}

export default cocktailsReducer;