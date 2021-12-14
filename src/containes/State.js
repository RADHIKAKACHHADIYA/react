import React, { Component } from 'react';
import Country from './Country';

class State extends Component {
    constructor (props) {
        super(props); 
        this.state = {
             count:0
        }
    }

    render() {
        return (
            <div>
                <p>you clicked {this.state.count} times.</p>
                <button onClick={() => this.setState({ count: this.state.count - 1})}>-</button>
                <button onClick={() => this.setState({ count: this.state.count + 1})}>+</button>
            </div>
        );
    }
}

export default State;