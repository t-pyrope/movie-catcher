import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import noPhoto from '../../img/no-photo.png';

import '../Card/card.scss';

const Actor = ({ actorName, posterPath, id }) => (
  <Link to={`/person/${id}`}>
    <article className="card">
      <img
        className="card__image"
        src={
          posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : noPhoto
        }
        alt={actorName}
      />
      <div className="card__desc">
        <h4 className="card__title">{actorName}</h4>
      </div>
    </article>
  </Link>
);

Actor.propTypes = {
  actorName: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Actor.defaultProps = { posterPath: null };

export default Actor;
