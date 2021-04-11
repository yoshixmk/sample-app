import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList, { Character } from './CharacterList';

const App: FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '桜木花道', grade: 1, height: 189.2,
    }, {
      id: 2,
      name: '流川 楓', grade: 1, height: 187,
    }, {
      id: 3,
      name: '宮城リョータ', grade: 2,
      height: 168,
    }, {
      id: 4,
      name: '三井 寿', grade: 3,
    }, {
      id: 5,
      name: '赤木剛憲', grade: 3, height: 197,
    },
  ];

  return (
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
      <div className="container">
        <header>
          <h1>『SLAM DUNK』登場人物</h1>
        </header>
        <CharacterList school="湘北高校" characters={characters} /> </div>
    </div>
  )
};

export default App;
