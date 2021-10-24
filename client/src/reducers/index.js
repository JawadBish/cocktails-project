import { combineReducers } from "redux";
import cocktails from './cocktails';
import auth from './auth';

export default combineReducers({ cocktails, auth });