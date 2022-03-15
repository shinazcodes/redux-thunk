import { combineReducers } from "redux";
import bgReducer from "./bgReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({
    userReducer: userReducer,
    bgReducer

})

export default reducers;
export type RootState = ReturnType<typeof reducers>;