import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.jsx'; // for main concepts https://reactjs.org/docs/hello-world.html
import {App} from './productTable/App.jsx'; // for https://reactjs.org/docs/thinking-in-react.html tutorial

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// This is everything we need to set up React,
// All modules will be imported in App.js
