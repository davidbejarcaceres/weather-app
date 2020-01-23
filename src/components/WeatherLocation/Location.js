import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./styles.css"


export default Location = (props) => {

    const { city } = props;

    return (
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    )

}

Location.propTypes = {
    city: PropTypes.string
};