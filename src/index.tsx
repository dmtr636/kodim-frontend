import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"

import "@fontsource/raleway/500.css"
import "@fontsource/raleway/600.css"
import "@fontsource/raleway/700.css"
import "@fontsource/raleway/900.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
