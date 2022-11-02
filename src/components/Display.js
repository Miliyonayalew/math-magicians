import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <div className="display">
      <p className="result">{result}</p>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Display;
