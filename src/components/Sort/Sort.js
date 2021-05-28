import React from 'react';
import PropTypes from 'prop-types';
import './sort.scss';

const SortComponent = ({ sortType, setSortType }) => {
  const setSortTypeHandler = (e) => {
    setSortType(e.target.value);
  };

  return (
    <select onChange={setSortTypeHandler} value={sortType} className="sort">
      <option value="popularity.desc">Most Popular</option>
      <option value="vote_average.desc">High Rated</option>
      <option value="release_date.desc">Latest</option>
    </select>
  );
};

SortComponent.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
};

export default SortComponent;
