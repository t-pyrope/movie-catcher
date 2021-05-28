import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Card/card.scss';
import noPoster from '../../img/no-poster.png';
import star from '../../img/star.png';

const Movie = ({
  title, posterPath, rating, id,
}) => {
  const addDefaultSrcHandler = (e) => {
    e.target.src = noPoster;
  };

  const titleHandler = () => {
    const titleArr = title.split(' ');
    let newTitleArr;
    if (titleArr.length > 4) {
      newTitleArr = titleArr.slice(0, 4);
      newTitleArr.push('...');
    } else {
      newTitleArr = [...titleArr];
    }
    const newTitle = newTitleArr.join(' ');
    let secondCheckTitleArr;
    let secondCheckTitle;
    if (newTitle.length > 20) {
      secondCheckTitleArr = newTitle.split(' ').slice(0, 3);
      secondCheckTitleArr.push('...');
      secondCheckTitle = secondCheckTitleArr.join(' ');
    }

    let thirdCheckTitleArr;
    let thirdCheckTitle;
    if (secondCheckTitleArr && secondCheckTitle.length > 20) {
      thirdCheckTitleArr = secondCheckTitle.split(' ').slice(0, 2);
      thirdCheckTitleArr.push('...');
      thirdCheckTitle = thirdCheckTitleArr.join(' ');
    }

    return thirdCheckTitle || secondCheckTitle || newTitle;
  };

  return (
    <Link to={`/movies/${id}`}>
      <article className="card">
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} onError={(e) => { addDefaultSrcHandler(e); }} alt="poster" className="card__image" />
        <div className="card__desc card__desc_movie">
          <h4>{titleHandler()}</h4>
          <div className="card__rating">
            <img src={star} alt="" className="card__ratingImg" />
            <p>{rating}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  posterPath: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Movie.defaultProps = { posterPath: noPoster };

export default Movie;
