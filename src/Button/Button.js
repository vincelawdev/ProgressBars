import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button>{props.number}</button>
    );
};

Button.propTypes = {
    number: PropTypes.number
};

export default Button;