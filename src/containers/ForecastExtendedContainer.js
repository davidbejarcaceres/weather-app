import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getForecastDataFromCities, getCity } from "../reducers"
import CircularProgress from "@material-ui/core/CircularProgress"


const ForecastExtendedLazy = lazy(() => import('../components/ForecastExtended'));


const ForecastExtendedContainer = ({city, forecastData}) => {

    return (
        <div>

            {
                forecastData ? <Suspense> <ForecastExtendedLazy forecast={forecastData} city={city}></ForecastExtendedLazy> </Suspense> : <CircularProgress/>
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
