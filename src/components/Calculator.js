import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const {
      target: { textContent: buttonName },
    } = e;
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="container">
          <div className="display">
            <p className="result">{(total || '') + (operation || '') + (next || '') || 0}</p>
          </div>
          <button type="button" onClick={this.handleClick} className="btn">AC</button>
          <button type="button" onClick={this.handleClick} className="btn">+/-</button>
          <button type="button" onClick={this.handleClick} className="btn">%</button>
          <button type="button" onClick={this.handleClick} className="btn-end">÷</button>
          <button type="button" onClick={this.handleClick} className="btn">7</button>
          <button type="button" onClick={this.handleClick} className="btn">8</button>
          <button type="button" onClick={this.handleClick} className="btn">9</button>
          <button type="button" onClick={this.handleClick} className="btn-end">x</button>
          <button type="button" onClick={this.handleClick} className="btn">4</button>
          <button type="button" onClick={this.handleClick} className="btn">5</button>
          <button type="button" onClick={this.handleClick} className="btn">6</button>
          <button type="button" onClick={this.handleClick} className="btn-end">-</button>
          <button type="button" onClick={this.handleClick} className="btn">1</button>
          <button type="button" onClick={this.handleClick} className="btn">2</button>
          <button type="button" onClick={this.handleClick} className="btn">3</button>
          <button type="button" onClick={this.handleClick} className="btn-end">+</button>
          <button type="button" onClick={this.handleClick} className="btn-zero">0</button>
          <button type="button" onClick={this.handleClick} className="btn">.</button>
          <button type="button" onClick={this.handleClick} className="btn-end">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
