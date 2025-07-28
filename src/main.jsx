//Main js File
import React from 'react';
import ReactDOM from 'react-dom/client';
import  App from './App.jsx'; // Import the App component

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';

// entry point for the React application
// map => link your main component with your HTML file

//document.querySelector('#root').innerHTML = '<h1>Hello, React!</h1>';

//1- React has its own DOM =>
const root = document.querySelector('#root');
const reactRootElement = ReactDOM.createRoot(root);
// To render Any Component => you must render it using its selector
// Selector => Component Name in empty Tag
reactRootElement.render(
    <React.StrictMode>
        <App /> {/* Render the App component */}
    </React.StrictMode>
); // render the App component into the root element


