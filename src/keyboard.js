import React from 'react';

// Keyboard component that renders the keyboard
const Keyboard = () => {
  const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
  ];

  return (
    <div className="keyboard">
      {keys.map(key => (
        <button key={key} className="key">{key}</button>
      ))}
    </div>
  );
};

export default Keyboard;
