import React, { useState, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Col, Row } from "react-flexbox-grid";
import { setCity } from "./actions/index"
import Particles from "./components/particulas"

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


const LocationListContainerLazy = lazy(() => import("./containers/LocationListContainer"));
const ForecastExtendedContainerLazy = lazy(() => import("./containers/ForecastExtendedContainer"));

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
      <Particles></Particles>
      <Grid className="gridApp">
        <Row>
          <Col lg={5} md={5} xs={12} >

              <Suspense fallback={<div>Loading...</div>}>
                <LocationListContainerLazy onHandleSelectedLocation={(city, index) => handleSelectedLocation(city, index)}></LocationListContainerLazy>
              </Suspense>
                      

          </Col>

          <Col lg={7} md={6} xs={12} >

            <div className="detail">

              
              <Suspense fallback={<div>Loading...</div>}>
                <ForecastExtendedContainerLazy {...props} />
              </Suspense>

            </div>

          </Col>
        </Row>
      </Grid>



    </div>
  );
}


const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default App // Conects App with redux ;