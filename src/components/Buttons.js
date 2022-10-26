import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { handleClick } = props;
  const values = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const signs = ['÷', 'x', '-', '+', '='];
  const zero = ['0'];
  return (
    <>
      {values.map((value) => (
        <button
          type="button"
          className={`${signs.includes(value) ? 'btn-end' : 'btn'}  ${zero.includes(value) ? 'btn-zero' : 'btn'}`}
          onClick={handleClick}
          key={value}
        >
          {value}
        </button>
      ))}
    </>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
