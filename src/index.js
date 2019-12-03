import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Enable concurrent mode (set of features that stops the rendering from being blocked, it allows the rendering process to be interrupted so that you can improve the user experience)
ReactDOM.createRoot(document.getElementById('root').render(<App />));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
