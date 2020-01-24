import React from 'react';
import WeatherLocation from "./components/WeatherLocation/index"
import LocationList from "./components/LocationList";
import logo from './logo.svg';
import './App.css';
import { Grid, Col, Row } from "react-flexbox-grid";

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

        <div className="tituloApp">
          <img className="logoApp" src={logo} alt="Logo" />
          <h1 className="tituloAppH1">Weather App</h1>
        </div>


      </header>

      <Grid className="gridApp">
        <Row>
          <Col xs={12} md={6}>

            <LocationList cities={cities}></LocationList>

          </Col>

          <Col xs={12} md={6}>

            <div className="detailsComponent">
              Details
            </div>

          </Col>
        </Row>
      </Grid>



    </div>
  );
}



export default App;
