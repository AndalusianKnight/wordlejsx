import React from 'react';
import Board from './board';
import Keyboard from './keyboard';
import './App.css';

// App component that renders the Board and Keyboard components
const App = () => {
  const guesses = ["might", "flood", "stray"];
  const answer = "moody";

  return (
    <div className="App">
      <h1>Wordle - React Edition</h1>
      <h2>Guess the word</h2>
      <Board guesses={guesses} answer={answer} />
      <Keyboard />
    </div>
  );
}

export default App;
