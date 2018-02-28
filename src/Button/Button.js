import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import './Button.css';

const Button = (props) => {
    const {number, callbackParent} = props;
    const numberLabel = number > 0 ? `+${number}` : number;

    // update selected progress bar array value in parent component state
    const buttonOnClick = () => {
        callbackParent(number);
    };

    return (
        <button onClick={debounce(buttonOnClick, 250)}>{numberLabel}</button>
    );
};

Button.propTypes = {
    number: PropTypes.number.isRequired,
    callbackParent: PropTypes.func.isRequired
};

export default Button;