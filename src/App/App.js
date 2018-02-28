import React, { Component } from 'react';
import axios from 'axios';
import { ProgressBar } from '../ProgressBar/index';
import { Button } from '../Button/index';
import './App.css';

class App extends Component {
    state = {
        buttons: [],
        bars: []
    };

    componentDidMount() {
        axios.get('https://frontend-exercise.apps.b.cld.gov.au/bars')
            .then(response => {
                this.setState({ buttons: response.data.buttons, bars: response.data.bars });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="AppContainer">
                <div className="ProgressBarContainer">
                    {this.state.bars.map((bar, barIndex) => (<ProgressBar id={barIndex} percentage={bar} key={barIndex} />))}
                </div>
                <div className="ControlsContainer">
                    {this.state.buttons.map((button, buttonIndex) => (<Button number={button} key={buttonIndex} />))}
                </div>
            </div>
        );
    }
}

export default App;
