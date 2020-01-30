import React from 'react'
import PropTypes from 'prop-types'
import ForecastExtended from '../components/ForecastExtended'
import { connect } from 'react-redux'
import { cities } from '../reducers/cities'
import { getForecastDataFromCities } from "../reducers/cities"

const ForecastExtendedContainer = (props) => {
    const { city } = props
    const forecast = props.cities[city] ? props.cities[city].forecastData : null

    return (
        <div>

            {
                forecast ? <ForecastExtended forecast={forecast} city={city}></ForecastExtended> : null
            }
        </div>
    )
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    // forecastData: PropTypes.array.isRequired,
}

// const mapStateToProps = state => ({ city: state.city, forecastData: getForecastDataFromCities(state.citites, state.city) });
const mapStateToProps = state => (state);

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
