import React from 'react';

function VirtualKeyboard({ azertyLayout }) {
    return (
      <div className='virtual-keyboard'>
        {azertyLayout.split('').map((char, charIndex) => (
          <button
            key={charIndex}
            className="button"
            data-button="virtual-keyboard"
            data-char={char}
          >
            {char}
          </button>
        ))}
      </div>
    );
  }
  

export default VirtualKeyboard;
