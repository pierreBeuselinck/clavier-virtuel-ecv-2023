import React from 'react';

function Button({ char, onClick }) {
  return (
    <button className="button" onClick={() => onClick(char)}>
      {char}
    </button>
  );
}

export default Button;
