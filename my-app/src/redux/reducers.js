import {combineReducers} from "redux";
import catsReducer from "./slices/firstSagaSlice";

export const reducers = combineReducers({
    cats: catsReducer,
});