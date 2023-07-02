import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Home from '../pages/index';
import SupportAdmin from './SupportAdmin';

const path = window.location.pathname

// if you are on Support Rout , then rander <SupportAdmin /> component else go to home page which will have support Live chat box inside
ReactDOM.render(
  <React.StrictMode>
    { path.indexOf('/support') === -1 ? <Home /> : <SupportAdmin /> }
  </React.StrictMode>,
  document.getElementById('root')
);
