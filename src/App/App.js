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
            this.setState({selectedProgressBar: parseInt(index)});
        }
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
                        {this.state.buttons.map((button, buttonIndex) => (<Button number={button} key={buttonIndex} />))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
