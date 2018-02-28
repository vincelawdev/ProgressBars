import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = (props) => {
    const {progressBars, callbackParent} = props;

    // update selected progress bar in parent component state
    const dropdownOnChange = (event) => {
        callbackParent(event.target.value);
    };

    return (
        <select onChange={dropdownOnChange}>
            <option value="">Select a bar</option>
            {progressBars.map((progressBar, progressBarIndex) => (<option key={progressBarIndex} value={progressBarIndex}>Bar {progressBarIndex + 1}</option>))}
        </select>
    );
};

Dropdown.propTypes = {
    progressBars: PropTypes.array.isRequired,
    callbackParent: PropTypes.func.isRequired
};

export default Dropdown;
