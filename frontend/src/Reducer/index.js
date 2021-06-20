import { combineReducers, createStore } from "react-redux";
import loginReducers from "./login/index";
import articlesReducers from "./articles/index";

const reducers = combineReducers({
    loginReducers,
    articlesReducers,
});

export default store = createStore(reducers);