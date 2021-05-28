import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ButtonPrevNext = ({
  callback, direction, page, maxPages,
}) => {
  return (
    <button
      type="button"
      aria-label={`go to ${direction} page`}
      onClick={callback}
      className={`button button__prevNext ${(page === maxPages || (page < 2 && direction === 'previous')) ? 'button__prevNext_disabled' : ''}`}
    >
      <FontAwesomeIcon icon={direction === 'previous' ? faAngleLeft : faAngleRight} size="2x" />
    </button>
  );
};

ButtonPrevNext.propTypes = {
  callback: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  maxPages: PropTypes.number,
};

ButtonPrevNext.defaultProps = {
  maxPages: 1000,
};

export default ButtonPrevNext;
