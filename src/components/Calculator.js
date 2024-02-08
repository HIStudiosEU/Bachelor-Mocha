import React, { useState } from 'react';
import '../styling/Calculator.css'

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C',
    ];

    return buttons.map((button) => (
      <button key={button} onClick={() => handleButtonClick(button)}>
        {button}
      </button>
    ));
  };

  return (
    <div className='calculator-container'>
      <h2>Calculator</h2>
      <div className="calculator">
        <div className="display">
          <div className="input" data-testid="input-display">{input}</div>
          <div className="result" data-testid="result-display">{result}</div>
        </div>
        <div className="buttons">{renderButtons()}</div>
      </div>
    </div>
  );
}

export default Calculator;