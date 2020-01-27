import { SET_CIUDAD } from "../actions/index";

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CIUDAD:
            return {...state, city: action.value}
            break;
    
        default:
            break;
    }

    return state
}
