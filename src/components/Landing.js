import React, { Component } from 'react';
import './App.css';
import Figures from './Figures.js';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>The Tech List - Influential Figures in Tech</h1>
                    <Figures figures={this.state.figures} />
                </header>

            </div>
        );
    }

}

export default App;
