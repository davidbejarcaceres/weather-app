import React from 'react'
import { useState } from "react";
import PropTypes from 'prop-types'
import LocationList from "../components/LocationList";
import { connect } from "react-redux" // Can connect react and redux
import { setCity } from "../actions/index"

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
        <LocationList onUpdateClickHandle={() => updateList()} onSelectedLocation={(city, index) => handleSelectedLocation(city, index)} onAddCity={(event) => onHandleAddCity(event)} cities={cities}></LocationList>
    )
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer)

