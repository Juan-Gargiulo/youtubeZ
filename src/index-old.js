import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'
import Routes from './components/Routes'

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
