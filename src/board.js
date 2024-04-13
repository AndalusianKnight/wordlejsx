import React from 'react';

// Board component that takes in two props: guesses and answer
const Board = ({ guesses, answer }) => {
  const getCellStyle = (char, idx) => {
    // If the character is in the correct position
    if (char === answer[idx]) {
      return { backgroundColor: '#4CAF50' }; // Green - Yes and exact postion
    } else if (answer.includes(char)) {
      return { backgroundColor: '#FFC107' }; // Yellow - Yes but wrong postion
    } else {
      return { backgroundColor: '#333333' }; // Dark grey - No
    }
  };
  
// The Board component renders the guesses and answer in a grid format
  return (
    <div className="board">
      {guesses.map((guess, index) => (
        <div key={index} className="row">
          {guess.split('').map((char, idx) => (
            <div key={idx} className="cell" style={getCellStyle(char, idx)}>
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
