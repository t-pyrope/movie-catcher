import React from 'react';
import PropTypes from 'prop-types';

const ButtonLikeLink = ({ callback, text }) => <button type="button" className="button button__link" onClick={callback}>{text}</button>;

ButtonLikeLink.propTypes = {
  callback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLikeLink;
