import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import './App.css';
import Context from './components/Context';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Context>
      <App />
    </Context>
  </Provider>,
  rootElement,
);
