import React, { VFC } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import TextInput from './TextInput';

const App: VFC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <Timer limit={60} />
    <TextInput />
  </div>
);

export default App;
