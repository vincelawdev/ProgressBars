import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ProgressBar.css';

const ProgressBar = (props) => {
    const { percentage, selected } = props;
    const percentageLabel = percentage < 0 ? 0 : percentage;
    let percentageLine = percentage;

    // set upper and lower limit of the percentage used in width
    if(percentage > 100) {
        percentageLine = 100;
    }
    else if(percentage < 0) {
        percentageLine = 0;
    }

    // ProgressBar css classes
    const ProgressBarClass = classNames({
        'ProgressBar': true,
        'max': percentageLine === 100 ? true : false,
        'selected': selected
    });

    return (
        <div className={ProgressBarClass}>
            <div className="ProgressBarBackground">
                <span className="ProgressBarPercentage">{percentageLabel}%</span>
                <span className="ProgressBarLine" style={{width: percentageLine + '%'}}></span>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    id: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired
};

export default ProgressBar;