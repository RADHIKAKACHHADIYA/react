import React, { Component } from 'react';

class TimerClass extends Component {
    constructor (props) {
        super (props);
        this.state = {
            time : new Date()
        }
    }

    componentDidMount = () => {
        this.state = setInterval( 
          () => 
            this.setState({time : new Date()}),1000
        )
    }
    componentDidUpdate = () => {

    }
    componentWillUnmount = () => {

    }

    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default TimerClass;