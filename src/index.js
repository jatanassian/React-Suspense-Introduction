import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Enable concurrent mode (set of features that stops the rendering from being blocked, it allows the rendering process to be interrupted so that you can improve the user experience)
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

