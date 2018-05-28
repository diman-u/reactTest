
import React, { Component } from 'react';

function tick() {
    const element = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    return element;
}

class Timer extends Component {
    render() {
        return (
            tick()
        );
    }
}

export default Timer;

//setInterval(tick, 1000);