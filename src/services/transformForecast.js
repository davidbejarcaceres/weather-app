import moment from "moment"
import transformWeather from "./transformWeather"

const transformForecast = (jsonForecast) =>{
    let dataFormated = jsonForecast.list.filter(item => (
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18
    )).map( item => (
        {
            weekDay: moment.unix(item.dt).utc().format("ddd"),
            hour: moment.unix(item.dt).utc().hour(),
            data: transformWeather(item)
        }
    ))
    return dataFormated
}

export default transformForecast;