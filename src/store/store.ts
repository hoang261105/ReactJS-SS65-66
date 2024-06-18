import { combineReducers, createStore } from "redux";
import reducerProfile from "./reducers/profileReducer";
import reducerProduct from "./reducers/productReducer";
import countReducer from "./reducers/counterReducer";
import randomReducer from "./reducers/randomReducer";
import changeReducer from "./reducers/changeReducer";

const rootReducer = combineReducers({
    reducerProfile,
    reducerProduct,
    countReducer,
    randomReducer,
    changeReducer
})

const combineReducer = createStore(rootReducer) 

export default combineReducer