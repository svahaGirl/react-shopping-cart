import { createStore, applyMiddleware, combineReducers  } from "react-redux";
import { compose } from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./reducer/productReducers";


const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    
);


export default store;