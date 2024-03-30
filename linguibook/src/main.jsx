import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index.js';
import { Provider } from 'react-redux'
import './styles/index.css'
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
