import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import Router from './components/Routes';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router />,
  rootElement,
);
