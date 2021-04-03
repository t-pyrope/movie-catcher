import React from 'react';

const SortComponent = ({sortType, setSortType}) => {
    const setSortTypeHandler = (e) => {
        setSortType(e.target.value);
    }
    return(
        <select onChange={setSortTypeHandler} value={sortType}>
            <option value="popularity.desc">Most Popular</option>
            <option value="vote_average.desc">High Rated</option>
            <option value="release_date.desc">Latest</option>
        </select>
    )
}
export default SortComponent;