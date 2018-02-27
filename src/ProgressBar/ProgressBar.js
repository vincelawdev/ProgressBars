import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
    return (
        <div>Progress Bar: {props.percentage}</div>
    );
};

ProgressBar.propTypes = {
    percentage: PropTypes.number
};

export default ProgressBar;