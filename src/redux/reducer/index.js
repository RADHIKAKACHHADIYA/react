import { combineReducers } from "redux";
import couterReducer from "./counter.reducer";

const rootReducer = combineReducers({
    counter: couterReducer
})

export default rootReducer;