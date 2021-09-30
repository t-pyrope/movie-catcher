import React from 'react';
import PropTypes, { oneOfType, string, node } from 'prop-types';
import './button.scss';

const CustomButton = ({
  onClick, text, className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: oneOfType([string, node]).isRequired,
  className: PropTypes.string.isRequired,
};

export default CustomButton;
