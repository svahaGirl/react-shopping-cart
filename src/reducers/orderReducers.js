import { CLEAR_ORDER, CREATE_ORDER } from "../types";


const orderReducer = (state = {}, action) => {

    switch(action.type){
        case CREATE_ORDER:
            return { order: action.payload};
        case CLEAR_ORDER:
            return {order: null};
    /*   case FETCH_ORDERS:
            return{ order: action.payload}; */
        default:
            return state;
    }
};

export{ orderReducer };