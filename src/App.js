import React, { Component } from 'react';
import axios from 'axios';
import { ProgressBar } from './ProgressBar';
import { Button } from './Button';
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
            <div className="app-container">
                <div className="progress-bar-container">
                    {this.state.bars.map(bar => (<ProgressBar percentage={bar} key={bar.toString()} />))}
                </div>
                <div className="controls-container">
                    {this.state.buttons.map(button => (<Button number={button} key={button.toString()} />))}
                </div>
            </div>
        );
    }
}

export default App;
