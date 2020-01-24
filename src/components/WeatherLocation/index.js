import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import { SUN, WINDY } from "../../consants/weather";
import { useState, useEffect  } from "react";
import api_weather from "../../consants/weather_api";


const WeatherLocation = () => {
  const data1 = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s"
  };

  // handleUpdateClick
  const [city, setCity] = useState("loading..");
  const [data, setData] = useState();
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let nuevos= await getAPI(api_weather);
      setData(nuevos.new_weather);
      setCity(nuevos.city);
    };
    
    fetchData();
  }, []);


async function handleUpdateClick() {  
    let nuevos= await getAPI(api_weather);
    console.log("Updated!");
    setData(nuevos.new_weather);  
    setCity(nuevos.city);
  }

   function getData(json) {
     const {humidity, temp} = json.main;
     const speed = json.wind.speed;
     const weatherState = SUN;
     const city = json.name
     
     let nuevosDatos = {
     humidity: humidity,
     temperature: parseInt((temp - 273), 10),
     weatherState: weatherState,
     wind:  `${speed} m/s`
     };

     let todos = {
          new_weather: nuevosDatos,
          city: city
     }

     return todos;
  }

function getAPI(url) {
    return fetch(url)
      .then(res => {           
        return res.json();
      })
      .then(jsonResponse => {          
        return getData(jsonResponse);
      });
  };

  return (
    <div className="weatherLocationCont">
      {
        (city) ? <Location city={city}></Location> : <Location city={"loading..."}></Location>
      }
      {
        (data) ? <WeatherData data={data}></WeatherData> : <span></span>
      }

      <button className="buttonWeatherLocation" onClick={handleUpdateClick}>
        Update
      </button>
    </div>
  );
};

export default WeatherLocation;

WeatherLocation.propTypes = {
     data: PropTypes.shape({
       temperature: PropTypes.number.isRequired,
       weatherState: PropTypes.string.isRequired,
       humidity: PropTypes.number.isRequired,
       wind: PropTypes.string.isRequired
     })
   };