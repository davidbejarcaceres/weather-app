import React from 'react'
import PropTypes from 'prop-types'
import ForecastExtended from '../components/ForecastExtended'
import { connect } from 'react-redux'
import { getForecastDataFromCities, getCity } from "../reducers"

const ForecastExtendedContainer = ({city, forecastData}) => {

    return (
        <div>

            {
                forecastData ? <ForecastExtended forecast={forecastData} city={city}></ForecastExtended> : null
            }
        </div>
    )
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({city: getCity(state), forecastData: getForecastDataFromCities(state)});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
