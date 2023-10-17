import React, { useState, useEffect, useRef } from 'react';
import Button from './components/Button';
import Title from './components/Title';
import VirtualKeyboard from './components/VirtualKeyboard';

import './App.css';

function App() {
  const keyboardButtonsRef = useRef([]);
  const [inputValue, setInputValue] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [inputLength, setInputLength] = useState(0);
  const azertyLayout = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const handleButtonClick = (char) => {
    setInputValue((prevValue) => prevValue + char);
    setInputLength((prevLength) => prevLength + 1);
  };

  const handleClearClick = () => {
    setInputValue('');
    setInputLength(0);
  };

  const handleBackspaceClick = () => {
    if (inputLength > 0) {
      setInputValue((prevValue) => prevValue.slice(0, -1));
      setInputLength((prevLength) => prevLength - 1);
    }
  };

  const handleValidateClick = () => {
    switch (inputValue) {
      case 'WELCOME':
        setResultMessage('Vous bénéficiez de -20% sur votre commande');
        break;
      case 'IMHUNGRY23':
        setResultMessage('Une petite frite vous est offerte');
        break;
      case 'JAIDESCONTACTS':
        setResultMessage('La commande est gratuite (pensez au pourboire)');
        break;
      default:
        setResultMessage('Code invalide.');
        setInputValue(''); // Clear
        setInputLength(0);
    }
  };

  useEffect(() => {
    const keyboardContainer = document.querySelector('.keyboard-container');
  
    const handleClick = (event) => {
      if (event.target.dataset.button === 'virtual-keyboard') {
        const char = event.target.dataset.char;
        handleButtonClick(char);
      }
    };
  
    keyboardContainer.addEventListener('click', handleClick);
  
    return () => {
      keyboardContainer.removeEventListener('click', handleClick);
    };
  }, []);
  

  return (
    <div>
      <Title />
      <div className="keyboard-container">
        <div className='input-wrapper'>
          <input type="text" id="input-field" value={inputValue} readOnly />
          <div className="result-message">{resultMessage}</div>
        </div>
        <div className='virtual-keyboard-container'>
          <VirtualKeyboard azertyLayout={azertyLayout} onButtonClick={handleButtonClick} />
        </div>
        <div className="actions-wrapper">
          <Button char="Vider" onClick={handleClearClick} />
          <Button char="Supprimer" onClick={handleBackspaceClick} />
          <Button char="Valider" onClick={handleValidateClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
