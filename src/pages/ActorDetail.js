import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import loadPersonDetail from '../actions/personDetailAction';
import noPhoto from '../img/no-photo.png';
import { ButtonLikeLink } from '../styles';
import ScrollTop from '../components/ScrollTop';

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

  const openHandler = (e) => {
    if (e.target.classList.contains('biography')) {
      e.target.classList.toggle('active');
    }
  };

  const getPersonMoviesHandler = () => {
    return (personMovies.map((movie) => (
      <Link to={`/movies/${movie.id}`} key={movie.id}>
        <li>{movie.title}</li>
      </Link>
    )));
  };

  return (
    <>
      {!isLoading
                && (
                <Detail>
                  <ButtonLikeLink onClick={() => history.goBack()}>Back</ButtonLikeLink>
                  <Info>
                    <div className="info-desc">
                      <div className="basic-info">
                        <h2>{person.name}</h2>
                        <p className="country">
                          From
                          {' '}
                          {person.place_of_birth}
                        </p>
                      </div>
                      <div className="biography" onClick={(e) => openHandler(e)} onKeyDown={(e) => openHandler(e)} role="button" tabIndex="0">
                        <Toggle title="Biography" el={person.biography} />
                      </div>
                      <ul>
                        <Toggle title="Filmography" el={getPersonMoviesHandler()} />
                      </ul>
                    </div>
                    <img src={getPosterHandler()} onError={(e) => addDefaultSrcHandler(e)} className="poster" alt={person.name} />
                  </Info>
                  <ScrollTop />
                </Detail>
                )}
    </>
  );
};

const Toggle = ({ title, el }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div onClick={() => setToggle(!toggle)} role="button" onKeyDown={() => setToggle(!toggle)} tabIndex="0">
      <h3>{title}</h3>
      {toggle ? <motion.p transition={{ duration: 0.5 }} initial={{ height: 0 }} animate={{ height: 'auto' }}>{el}</motion.p> : ''}
    </div>
  );
};

Toggle.propTypes = {
  title: PropTypes.string.isRequired,
  el: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

const Detail = styled.div`
    width: 90%;
    margin: 2rem auto;
    @media (max-width: 1024px){
        width: 90%;
    }
`;

const Info = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;

    .info-desc {
        margin-bottom: 2rem;
        width: 50%;
        img {
            width: 1rem;
            height: 1rem;
        }
        .basic-info {
            margin-bottom: 2rem;
        }
    }

    .poster {
        margin-right: 3rem;
        border-radius: 0.5rem;
        width: 30%;
        height: 100vh;
        flex: 1;
        object-fit: cover;
    }

    h2 {
        margin-bottom: 0.5rem;
    }

    h3 {
        cursor: pointer;
        border-bottom: 5px solid #333333;
        padding: 0.5rem 0rem 0.5rem 0.5rem;
    }

    p {
        margin: 0.5rem;
        margin-bottom: 2rem;
    }

    .country {
        color: #636262;
        font-size: 0.9rem;
        
        span {
            margin-right: 1rem;
        }
    }

    .biography {
        overflow: hidden;
        transition: all 0.5s ease;
        margin-bottom: 0.5rem;

        p {
            pointer-events: none;
            line-height: 1.2rem;
            text-indent: 1rem;
        }
    }

    .biography.active {
        max-height: 100%;
    }

    .genre {
        background-color: #eebd61;
        color: white;
        padding: 0.2rem 0.3rem;
        border-radius: 0.2rem;
        margin-right: 0.3rem;
        width: 100%;
        height: 100%;
        line-height: 1.5rem;
    }

    li {
        padding: 0.5rem 0.5rem;
    }

    @media (max-width: 1024px){
        display: block;

        .poster {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0;
        }
        .info-desc {
            width: 100%;
        }
    }
`;

export default ActorDetail;
