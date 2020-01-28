import { SET_CIUDAD } from "../actions/index";

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CIUDAD:
            return action.payload;
            break;

        default:
            return state
            break;
    }
}
