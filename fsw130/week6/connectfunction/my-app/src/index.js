import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux.js"
import { Provider } from 'react-redux'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


