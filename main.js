import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
var ReactCountdownClock = require('react-countdown-clock');

//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<ReactCountdownClock seconds={90}
                     color="#000"
                     alpha={0.9}
                     size={300}
                     onComplete={
	console.log('Clock hit zero')
  } />, document.getElementById('clock'));
