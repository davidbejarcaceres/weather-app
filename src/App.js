import React from 'react';
import { useState } from "react";
import PropTypes, { any } from 'prop-types';
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";

import logo from './logo.svg';
import './App.css';
import { Grid, Col, Row } from "react-flexbox-grid";
import { setCity } from "./actions/index"
import Particulas from "./components/particulas"

const citiesWithCountry = [
  "Quito,ec",
  "Moscow,ru",
  "Rome,it",
  "New York,us",
  "London,uk",
  "Almeria,es",
  "Riobamba,ec",
  "barcelona,es"
]


function App(props) {

  // const [ciudad, setCiudad] = useState()
  const [cities, setCities] = useState(citiesWithCountry)

  const handleSelectedLocation = (city, index) => {
    console.log("APP: Selected location: " + city + "  Index: " + index);
    // setCiudad(city)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="tituloApp">
          <img className="logoApp" src={logo} alt="Logo" />
          <h1 className="tituloAppH1">Weather App</h1>
        </div>
      </header>
      <Particulas></Particulas>
      <Grid className="gridApp">
        <Row>
          <Col lg={5} md={5} xs={12} >

            <LocationListContainer onHandleSelectedLocation={(city, index) => handleSelectedLocation(city, index)}></LocationListContainer>

          </Col>

          <Col lg={7} md={6} xs={12} >

            <div className="detail">

              {/* {
                ciudad == null ? <h1>Please, select a city</h1> :
                  <ForecastExtended city={ciudad}></ForecastExtended>
              } */}

              <ForecastExtendedContainer></ForecastExtendedContainer>


            </div>

          </Col>
        </Row>
      </Grid>



    </div>
  );
}

App.propTypes = {
  // setCity: PropTypes.func.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default App // Conects App with redux ;