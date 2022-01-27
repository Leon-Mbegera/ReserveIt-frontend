/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from './store';
import App from './components/App';
import './App.css';
import Context from './components/Context';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 6000,
  offset: '30px',
  transition: transitions.SCALE,
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Context>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Context>
  </Provider>,
  rootElement,
);
