import React from 'react';
import WeatherLocation from "./components/WeatherLocation/index"
import LocationList from "./components/LocationList";
import logo from './logo.svg';
import './App.css';

const cities = [
  "Quito,ec",
  "Moscow,ru",
  "Rome,it",
  "New York,us",
  "London,uk"
]

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <h1>Weather App</h1>


      </header>

      <LocationList cities={cities}></LocationList>


    </div>
  );
}



export default App;
