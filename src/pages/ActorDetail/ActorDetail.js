import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import loadPersonDetail from '../../actions/personDetailAction';
import noPhoto from '../../img/no-photo.png';
import ButtonLikeLink from '../../components/ui/buttons/ButtonLikeLink';
import ScrollTop from '../../components/ScrollTop';
import '../../components/Container/container.scss';
import './actorDetail.scss';
import './accordion.scss';

const ActorDetail = () => {
  const history = useHistory();
  const personId = history.location.pathname.split('/')[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonDetail(personId));
  }, [dispatch, personId]);

  const { person, personMovies, isLoading } = useSelector((state) => state.person);

  const getPosterHandler = () => {
    return `https://image.tmdb.org/t/p/w780${person.profile_path}`;
  };

  const addDefaultSrcHandler = (e) => {
    e.target.src = noPhoto;
  };

  const getPersonMoviesHandler = () => {
    return (personMovies.map((movie) => (
      <Link to={`/movies/${movie.id}`} key={movie.id}>
        <li className="accordion__item_li">{movie.title}</li>
      </Link>
    )));
  };

  return (
    <>
      {!isLoading
      && (
      <main className="container_actorPage" role="main">
        <ButtonLikeLink callback={() => history.goBack()} text="Back" />
        <div className="info">
          <div className="info__desc">
            <div className="info__basic">
              <h1>{person.name}</h1>
              <p className="info__countries">
                From
                {' '}
                {person.place_of_birth}
              </p>
            </div>
            <Toggle title="Biography" el={person.biography} />
            <ul>
              <Toggle title="Filmography" el={getPersonMoviesHandler()} />
            </ul>
          </div>
          <img src={getPosterHandler()} onError={(e) => addDefaultSrcHandler(e)} className="info__poster info__poster_actor" alt={person.name} />
        </div>
        <ScrollTop />
      </main>
      )}
    </>
  );
};

const Toggle = ({ title, el }) => {
  return (
    <details className="accordion">
      <summary className="accordion__header"><h2>{title}</h2></summary>
      <p className="accordion__item">{el}</p>
    </details>
  );
};

Toggle.propTypes = {
  title: PropTypes.string.isRequired,
  el: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default ActorDetail;
