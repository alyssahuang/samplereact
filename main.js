import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
var ReactCountdownClock = require('react-countdown-clock');

//ReactDOM.render(<App />, document.getElementById('app'));
class Countdown extends React.PureComponent{
  constructor() {
    super()
    this.state = {
      paused: false,
      timer: 90
    }

    this.start = this.start.bind(this)
    this.pause = this.pause.bind(this)
    this.reset = this.reset.bind(this)
  }

start() {
  this.setState({paused: false}) 
}

pause() {
	this.setState({paused: true})
}

reset() {
  this.setState({timer: 0})
  this.setState({paused: !this.state.paused})
  this.setState({paused: this.state.paused})
  console.log(this.state)
}

render() { 
  return (
    <div>
    <ReactCountdownClock seconds={this.state.timer}
                     color="#000"
                     alpha={0.9}
                     size={300}
                     paused={ this.state.paused }
                     onComplete={ console.log('Clock hit zero') } />
    <Buttons startTimer={this.start} pauseTimer={this.pause} resetTimer={this.reset} /> 
  </div>)
  }
}
function Buttons(props) {
    return(
      <div style={{"padding-top":"400px"}}>
        <button id='start' onClick={props.startTimer}>Resume</button>
        <button id='pause' onClick={props.pauseTimer}>Pause</button>
        <button id='reset' onClick={props.resetTimer}>Reset</button>
      </div>
    );
}

ReactDOM.render(<Countdown />, document.getElementById('clock'))