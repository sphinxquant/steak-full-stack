import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { HelloWorld } from '@sponsored/component-lib';

function App() {
  console.log(HelloWorld);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <HelloWorld />
      </header>
    </div>
  );
}

export { App };
