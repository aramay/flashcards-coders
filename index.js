import ReactDOM from 'react-dom';
import React from 'react';
import App from './src/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('entry-point')
);