import React from 'react';
import { useState } from "react";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended"
import logo from './logo.svg';
import './App.css';
import { Grid, Col, Row } from "react-flexbox-grid";
import { createStore } from "redux"; // Imports redux
import { connect } from "react-redux" // Can connect react and redux
import { setCity } from "./actions/index"
import { store } from "./store/index";

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

  const [ciudad, setCiudad] = useState()
  const [cities, setCities] = useState(citiesWithCountry)

  const handleSelectedLocation = (city, index) => {
    console.log("APP: Selected location: " + city + "  Index: " + index);
    setCiudad(city)
    props.setCity(city) // Redux create action,
  }

  const updateList = () => {
    console.log("APP: Updating List");
    setCities(cities.slice(0, cities.length - 1))
    console.log(cities);
  }

  const onHandleAddCity = (newCity) => {
    console.log("Add city to list:  " + newCity);
    const citiesAfterAdded = [...cities];
    citiesAfterAdded.push(newCity)
    cities.push(newCity)
    setCities(citiesAfterAdded)
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

            <LocationList onUpdateClickHandle={() => updateList()} onSelectedLocation={(city, index) => handleSelectedLocation(city, index)} onAddCity={(event) => onHandleAddCity(event)} cities={cities}></LocationList>

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



const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
})
const AppConnected = connect(null, mapDispatchToPropsActions)(App) // Conects App with redux 
export default AppConnected;