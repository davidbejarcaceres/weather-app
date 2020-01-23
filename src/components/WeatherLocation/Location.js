import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./styles.css"


export default class Location extends Component {

    city = this.props.city; // Passed from the parent component 

    render() {
        // debugger; // To stop on Chrome at this point
        const { city } = this.props;
        console.log(this.props);
        return (
            <div className="locationCont">
                <h1>{city}</h1>
            </div>
        )
    }
}

Location.propTypes = {
    city: PropTypes.string
};