import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
    const {number} = props;
    const numberLabel = number > 0 ? `+${number}` : number;

    return (
        <button>{numberLabel}</button>
    );
};

Button.propTypes = {
    number: PropTypes.number.isRequired
};

export default Button;