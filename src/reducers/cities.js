import { SET_FORECAST_DATA } from "./../actions"

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload
            return { ...state, [city]: { forecastData, weather: null } }
            break;

        default:
            return state;
            break;
    }
}