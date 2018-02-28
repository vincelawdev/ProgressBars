import React, { Component } from 'react';
import axios from 'axios';
import { ProgressBar } from '../ProgressBar';
import { Dropdown } from '../Dropdown';
import { Button } from '../Button';
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

    selectProgressBar = (index) => {
        // no progress bar selected
        if(index === '') {
            this.setState({selectedProgressBar: null});
        }
        // progress bar selected
        else {
            this.setState({selectedProgressBar: parseInt(index, 10)});
        }
    };

    updateProgressBarPercentage = (number) => {
        // no progress bar selected
        if(this.state.selectedProgressBar === null) {
            return;
        }

        // progress bar selected, update new progress bar number
        const selectedProgressBarIndex = this.state.selectedProgressBar;
        const selectedProgressBarCurrentNumber = this.state.progressBars[selectedProgressBarIndex];
        const selectedProgressBarNewNumber = selectedProgressBarCurrentNumber + number;

        // copy progressBars array, manipulate selected progress bar and set new progressBars state
        let newProgressBars = this.state.progressBars.slice();
        newProgressBars[selectedProgressBarIndex] = selectedProgressBarNewNumber;
        this.setState({progressBars: newProgressBars});
    };

    render() {
        return (
            <div className="AppContainer">
                <div className="ProgressBarContainer">
                    {this.state.progressBars.map((progressBar, progressBarIndex) => (<ProgressBar id={progressBarIndex} percentage={progressBar} selected={this.state.selectedProgressBar === progressBarIndex} key={progressBarIndex} />))}
                </div>
                <div className="ControlsContainer">
                    <Dropdown progressBars={this.state.progressBars} callbackParent={this.selectProgressBar} />
                    <div className="ButtonList">
                        {this.state.buttons.map((button, buttonIndex) => (<Button number={button} callbackParent={this.updateProgressBarPercentage} key={buttonIndex} />))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
