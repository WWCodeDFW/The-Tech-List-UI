import React, { Component } from 'react';
import './App.css';
import Figures from './components/Figures.js';

class App extends Component {
    state = {
        figures: []
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ figures: data })
            })
            .catch(console.log)
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Figures figures={this.state.figures} />
                </header>
            </div>
        );
    }

}

export default App;
