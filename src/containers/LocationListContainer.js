import React from 'react'
import { useState } from "react";
import PropTypes from 'prop-types'
import LocationList from "../components/LocationList";
import { connect } from "react-redux" // Can connect react and redux
import { setSelectedCity } from "../actions/index" // Redux function


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

function LocationListContainer(props) {


    const [ciudad, setCiudad] = useState()
    const [cities, setCities] = useState(citiesWithCountry)
    const citySelectedToApp = props.onHandleSelectedLocation

    const handleSelectedLocation = (city, index) => {
        console.log("APP: Selected location: " + city + "  Index: " + index);
        setCiudad(city)
        props.setCity(city) // Redux create action,
        citySelectedToApp(city, index)
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
        <LocationList
            cities
            onUpdateClickHandle={() => updateList()}
            onSelectedLocation={(city, index) => handleSelectedLocation(city, index)}
            onAddCity={(event) => onHandleAddCity(event)} cities={cities}>
        </LocationList>
    )
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    citites: PropTypes.array.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)), // Changes the state in Redux
    setWeather: cities => dispatch(setWeather(cities))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer)

