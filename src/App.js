import React, { Component } from 'react';
import axios from 'axios';

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
            <div>
                {this.state.bars.map(bar => (<p key={bar.toString()}>Bar: {bar}</p>))}
                {this.state.buttons.map(button => (<p key={button.toString()}>Button: {button}</p>))}
            </div>
        );
    }
}

export default App;
