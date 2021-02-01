import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { HelloWorld } from '@steakcoin/component-lib';

function App() {
  console.log(HelloWorld);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Hello hello</p>
        <HelloWorld />
      </header>
    </div>
  );
}

export { App };
