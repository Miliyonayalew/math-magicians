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
  result: PropTypes.string.isRequired,
};
export default Display;
