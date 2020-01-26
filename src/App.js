import React from 'react';
import { useState, useEffect } from "react";
import WeatherLocation from "./components/WeatherLocation/index"
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended"
import logo from './logo.svg';
import './App.css';
import { Grid, Col, Row } from "react-flexbox-grid";

const cities = [
  "Quito,ec",
  "Moscow,ru",
  "Rome,it",
  "New York,us",
  "London,uk",
  "Almeria,es",
  "Riobamba,ec",
]

function App() {

  const [ciudad, setCiudad] = useState()

  const handleSelectedLocation = (city, index) => {
    console.log("APP: Selected location: " + city + "  Index: " + index);
    setCiudad(city)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="tituloApp">
          <img className="logoApp" src={logo} alt="Logo" />
          <h1 className="tituloAppH1">Weather App</h1>
        </div>
      </header>

      <Grid className="gridApp">
        <Row>
          <Col lg={5} md={5} xs={12} >

            <LocationList onSelectedLocation={ (city, index) => handleSelectedLocation(city, index)} cities={cities}></LocationList>

          </Col>

          <Col lg={7} md={6} xs={12} >

            <div className="detail">
              
              {
                ciudad == null ? <h1>Please, select a city</h1> : 
                <ForecastExtended city={ciudad}></ForecastExtended>
              }
              

            </div>

          </Col>
        </Row>
      </Grid>



    </div>
  );
}





export default App;
