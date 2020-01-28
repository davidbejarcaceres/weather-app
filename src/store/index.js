import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import { city } from "../reducers/city"
import reducers from "./../reducers"


const initialState = {
    city: "Buenos Aires,ar"
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, composeEnchancers(applyMiddleware(thunk)));
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // Redux
