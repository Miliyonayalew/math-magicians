import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import Display from './Display';
import Button from './Buttons';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const value = e.target.textContent;
    setState(calculate(state, value));
  };

  const { total, next, operation } = state;
  const result = (total || '') + (operation || '') + (next || '') || 0;
  return (
    <div className="calculator">
      <div className="container">
        <Display result={result} />
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
