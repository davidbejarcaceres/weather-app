import React from 'react'
import PropTypes from 'prop-types'
import ForecastExtended from '../components/ForecastExtended'
import { connect } from 'react-redux'

const ForecastExtendedContainer = (props) => {
    return (
        <div>

            {
                props.city ? <ForecastExtended city={props.city}></ForecastExtended> : null
            }
        </div>
    )
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
}

const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
