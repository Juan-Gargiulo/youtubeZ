import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';

import { Button } from 'react-mdl';

class App extends Component {
  render() {

    const verdad = true;

    const btnClass = classNames({
      'mdl-button--raised mdl-button--colored' : verdad
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button className={btnClass} raised>Button</Button>
      </div>
    );
  }
}

export default App;
