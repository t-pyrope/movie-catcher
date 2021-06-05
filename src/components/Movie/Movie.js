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

  return (
    <Link to={`/movies/${id}`}>
      <article className="card">
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} onError={(e) => { addDefaultSrcHandler(e); }} alt="poster" className="card__image" />
        <div className="card__desc card__desc_movie">
          <h4 className="card__title">{title}</h4>
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
