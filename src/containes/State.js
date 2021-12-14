import React, { Component } from 'react';
import Country from './Country';

class State extends Component {
    constructor (props) {
        super(props); 
        this.state = {
             myState : 'gujarat'
        }
        console.log("1 constructor")
    }

    componentDidMount = ()  => {
        console.log("3 componentDidMount")
    }

    componentDidUpdate =() => {
        console.log("4 componentDidUpdate")
    }

    componentWillUnmount =() => {
        console.log("5 componentWillUnmount")
    } 

    render() {
        console.log("render")
        return (
            <div>
                <Country con="India" /> 
                <h2>My State is {this.state.myState}.</h2>
                <button onClick={() => this.setState({myState : 'Rajasthan'})}>change</button>
            </div>
        );
    }
}

export default State;