// Application entrypoint.

// Load up the application styles
// require("../styles/application.scss");
// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import App from './App.jsx';

window.jQuery = jQuery;
window.$ = jQuery;

ReactDOM.render(<App />, document.getElementById('react-root'));
