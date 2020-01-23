import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./styles.css"

export default class WeatherExtraInfo extends Component {
    render() {
        const { humidity, wind } = this.props;
        return (
            <div className="weatherExtraInfoCont">
                <span className="extraInfoText">{`Humedad: ${humidity} % - `}</span>
                <span className="extraInfoText">{`Viento: ${wind}`}</span>
            </div>
        )
    }
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number,
    wind: PropTypes.string
};