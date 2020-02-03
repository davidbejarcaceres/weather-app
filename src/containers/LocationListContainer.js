import React from 'react'
import { bindActionCreators} from "redux"
import PropTypes from 'prop-types'
import LocationList from "../components/LocationList";
import { connect } from "react-redux" // Can connect react and redux
import { setSelectedCity, setWeather } from "../actions/index" // Redux function
import { getWeatherCities, getCity } from './../reducers';
import { useEffect } from "react"

const LocationListContainer = (props)  => {
    const { setWeather, setSelectedCity, cities, city } = props;

    // setWeather(cities);
    console.log("Rendered List Container")
     
    useEffect(() => {
        
        console.log("Did mount");
        setWeather(cities);
        setSelectedCity(city)

        return () => {
            
        };
    }, [props.city])


    const handleSelectedLocation = (city, index) => {
        console.log("APP: Selected location: " + city + "  Index: " + index);
        debugger
        setSelectedCity(city)
        // setCiudad(city)
        // props.setCity(city) // Redux create action,
        // citySelectedToApp(city, index)
    }

    const updateList = () => {
        // console.log("APP: Updating List");
        // setCities(cities.slice(0, cities.length - 1))
        // console.log(cities);
    }

    const onHandleAddCity = (newCity) => {
        // console.log("Add city to list:  " + newCity);
        // const citiesAfterAdded = [...cities];
        // citiesAfterAdded.push(newCity)
        // cities.push(newCity)
        // setCities(citiesAfterAdded)
    }

    return (
        <LocationList
            onUpdateClickHandle={() => updateList()}
            onSelectedLocation={(city, index) => handleSelectedLocation(city, index)}
            onAddCity={(event) => onHandleAddCity(event)}
            cities={props.citiesWeather}>
        </LocationList>
    )
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    citites: PropTypes.array.isRequired,
    setWeather: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
    setSelectedCity: value => dispatch(setSelectedCity(value)), // Changes the state in Redux
    setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer)

