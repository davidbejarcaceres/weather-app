const location = "Buenos Aires,ar";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_forecast = "http://api.openweathermap.org/data/2.5/forecast";



function api_forecast(ciudad){
    return `${url_base_forecast}?q=${ciudad}&appid=${api_key}`;
}

export default api_forecast;