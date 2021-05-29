import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import loadGenres from '../../actions/genresAction';
import search from '../../utils';
import { liveSearchURL } from '../../api';
import './nav.scss';

const Nav = () => {
  const [textInput, setTextInput] = useState('');
  const [liveSearchMovies, setLiveSearchMovies] = useState([]);
  const liveSearch = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  useEffect(() => {
    dispatch(loadGenres());
  }, [dispatch, location]);

  useEffect(() => {
    liveSearch.current.classList.add('mainNav__liveSearch_hidden');
    setLiveSearchMovies([]);
    setTextInput('');
  }, [location]);

  const { genres } = useSelector((state) => state.genres);

  const searched = async (value) => {
    if (value !== '') {
      liveSearch.current.classList.remove('mainNav__liveSearch_hidden');
      const res = await search(liveSearchURL(value));
      const movies = await res.results.slice(0, 6);
      setLiveSearchMovies(movies);
    } else {
      liveSearch.current.classList.add('mainNav__liveSearch_hidden');
    }
    return null;
  };

  const inputHandler = (e) => {
    setTextInput(e.target.value);
    searched(e.target.value);
  };

  const searchMovieHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${textInput}`);
    setTextInput('');
    liveSearch.current.classList.add('mainNav__liveSearch_hidden');
  };

  const openGenreListHandler = (e) => {
    const parent = e.target.parentElement;
    parent.children[1].style.opacity = 1;
    parent.children[1].style.pointerEvents = 'all';
    return null;
  };

  const closeGenreListHandler = (e) => {
    if (e.target.classList.contains('genre-list')) {
      e.target.style.opacity = 0;
      e.target.style.pointerEvents = 'none';
    }
    if (e.target.classList.contains('genres')) {
      e.target.children[0].style.opacity = 0;
      e.target.children[0].pointerEvents = 'none';
    }
  };

  const genreSelectHandler = (e) => {
    e.stopPropagation();
    const genreId = e.target.id;
    history.push(`/genres/${genreId}`);
    const div = e.target.parentElement.parentElement;
    div.style.opacity = 0;
    div.style.pointerEvents = 'none';
  };
  const openPopularInHandler = (e) => {
    const parent = e.target.parentElement;
    parent.children[1].style.opacity = 1;
    parent.children[1].style.pointerEvents = 'all';
  };

  const closePopularInHandler = (e) => {
    if (e.target.classList.contains('popular-list')) {
      e.target.style.opacity = 0;
      e.target.style.pointerEvents = 'none';
    }
    if (e.target.classList.contains('popular')) {
      e.target.children[0].style.opacity = 0;
      e.target.children[0].pointerEvents = 'none';
    }
  };

  const yearSelectHandler = (e) => {
    e.stopPropagation();
    const genreId = e.target.id;
    history.push(`/year/${genreId}`);
    const div = e.target.parentElement.parentElement;
    div.style.opacity = 0;
    div.style.pointerEvents = 'none';
  };

  const openPeopleHandler = () => {
    history.push('/people');
  };

  return (
    <>
      <nav className="mainNav">
        <h1>
          <Link to="/" id="logo">Movie catcher</Link>
        </h1>
        <ul className="mainNav__linksBlock">
          <li className="mainNav__link mainNav__link_relative">
            <button
              className="mainNav__button mainNav__button_navItem"
              type="button"
              onClick={openGenreListHandler}
              onKeyDown={openGenreListHandler}
            >
              Genres
            </button>
            {genres.length && (
            <GenreList className="genre-list" onMouseLeave={closeGenreListHandler}>
              {genres.map((genre) => (
                <p key={genre.id}>
                  <button className="mainNav__button mainNav__button_navItem" type="button" id={genre.id} onClick={genreSelectHandler}>{genre.name}</button>
                </p>
              ))}
            </GenreList>
            )}
          </li>
          <li className="mainNav__link">
            <button type="button" onClick={openPeopleHandler} className="mainNav__button mainNav__button_navItem">People</button>
          </li>
          <li className="mainNav__link mainNav__link_relative">
            <button type="button" onClick={openPopularInHandler} className="mainNav__button mainNav__button_navItem">
              Popular in...
            </button>
            <GenreList className="popular-list" onMouseLeave={closePopularInHandler}>
              {years.map((year) => (
                <p key={year}><button type="button" onClick={yearSelectHandler} id={year} className="mainNav__button mainNav__button_navItem">{year}</button></p>
              ))}
            </GenreList>
          </li>
          <li className="mainNav__form mainNav__link">
            <form onSubmit={searchMovieHandler}>
              <input type="text" value={textInput} onChange={inputHandler} className="mainNav__input" />
              <button type="submit" aria-label="start search" className="mainNav__button mainNav__button_search"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
            <div className="mainNav__liveSearch mainNav__liveSearch_hidden" ref={liveSearch}>
              {liveSearchMovies.length && liveSearchMovies.map((movie) => (
                <a className="mainNav__searchedItem" href={`/movies/${movie.id}`} key={movie.id}>{movie.title}</a>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

const GenreList = styled.div`
    position: absolute;
    opacity: 0;
    pointer-events: none;
    z-index: 2;
    background-color: #353535;
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 2rem 2rem 1rem 0rem;
    width: 30rem;
    transition: all 0.4s ease-in-out;
    left: -10%;

    p {
        padding: 0.5rem;
        transition: all 0.4s ease;
        cursor: pointer;
        &:hover {
            background-color: #252525;
        }
    }

    @media (max-width: 500px){
        width: 20rem;
    }
`;

export default Nav;
