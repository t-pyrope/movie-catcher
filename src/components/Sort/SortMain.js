import React from 'react';
import PropTypes from 'prop-types';
import './sort.scss';

const SortMain = ({ val, callback }) => {
  return (
    <select value={val} onChange={callback} className="sort">
      <option value="day">This day</option>
      <option value="week">This week</option>
    </select>
  );
};

SortMain.propTypes = {
  val: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default SortMain;
