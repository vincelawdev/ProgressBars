import React, { Component } from 'react';
import axios from 'axios';
import { ProgressBar } from '../ProgressBar/index';
import { Button } from '../Button/index';
import './App.css';

class App extends Component {
    state = {
        buttons: [],
        progressBars: [],
        selectedProgressBar: null
    };

    componentDidMount() {
        axios.get('https://frontend-exercise.apps.b.cld.gov.au/bars')
            .then(response => {
                this.setState({ buttons: response.data.buttons, progressBars: response.data.bars });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="AppContainer">
                <div className="ProgressBarContainer">
                    {this.state.progressBars.map((progressBar, progressBarIndex) => (<ProgressBar id={progressBarIndex} percentage={progressBar} selected={this.state.selectedProgressBar === progressBarIndex} key={progressBarIndex} />))}
                </div>
                <div className="ControlsContainer">
                    <div className="ButtonList">
                        {this.state.buttons.map((button, buttonIndex) => (<Button number={button} key={buttonIndex} />))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
