var App = require('./components/app/App');
var React = require('react');

React.initializeTouchEvents(true);

var content = document.getElementById('content');
React.render(<App/>, content);
