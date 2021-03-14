import { combineReducers } from "redux";
import contactReducer from "./contact/contact.reducer";

const rootReducer = combineReducers({ contact: contactReducer });

export default rootReducer;
