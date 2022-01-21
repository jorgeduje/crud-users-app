import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// REUDX
import { Provider } from 'react-redux';
import { store } from "./REDUX/STORE/store"




ReactDOM.render(
  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

);


