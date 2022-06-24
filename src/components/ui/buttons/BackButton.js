import React from 'react';
import PropTypes from 'prop-types';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackButton = ({ label, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="button button_back">
      <FontAwesomeIcon icon={faAngleLeft} size="2x" color="#ffffff" />
      {label}
    </button>
  );
};

BackButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

BackButton.defaultProps = { label: 'Back' };

export default BackButton;
