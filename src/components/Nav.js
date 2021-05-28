import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import loadGenres from '../actions/genresAction';
import search from '../utils';
import { liveSearchURL } from '../api';

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
    liveSearch.current.classList.add('hidden');
    setLiveSearchMovies([]);
    setTextInput('');
  }, [location]);

  const { genres } = useSelector((state) => state.genres);

  const searched = async (value) => {
    if (value !== '') {
      liveSearch.current.classList.remove('hidden');
      const res = await search(liveSearchURL(value));
      const movies = await res.results.slice(0, 6);
      setLiveSearchMovies(movies);
    } else {
      liveSearch.current.classList.add('hidden');
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
    liveSearch.current.classList.add('hidden');
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
      <NavStyled>
        <h1>
          <Link to="/" id="logo">Movie catcher</Link>
        </h1>
        <ul>
          <li className="genres">
            <button
              className="nav-btn"
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
                  <button className="nav-btn" type="button" id={genre.id} onClick={genreSelectHandler}>{genre.name}</button>
                </p>
              ))}
            </GenreList>
            )}
          </li>
          <li>
            <button type="button" onClick={openPeopleHandler} className="nav-btn">People</button>
          </li>
          <li className="popular">
            <button type="button" onClick={openPopularInHandler} className="nav-btn">
              Popular in...
            </button>
            <GenreList className="popular-list" onMouseLeave={closePopularInHandler}>
              {years.map((year) => (
                <p key={year}><button type="button" onClick={yearSelectHandler} id={year} className="nav-btn">{year}</button></p>
              ))}
            </GenreList>
          </li>
          <li className="form">
            <form onSubmit={searchMovieHandler}>
              <input type="text" value={textInput} onChange={inputHandler} />
              <button type="submit" aria-label="start search"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
            <div className="live-search hidden" ref={liveSearch}>
              {liveSearchMovies.length && liveSearchMovies.map((movie) => (
                <a href={`/movies/${movie.id}`} key={movie.id}>{movie.title}</a>
              ))}
            </div>
          </li>
        </ul>
      </NavStyled>
    </>
  );
};

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 25vh;

    input[type="text"]{
        line-height: 1.3;
        padding: 0.2rem 1rem 0.2rem 0.4rem;
        border: 1px solid #c2c2c2;
        border-radius: 0.2rem;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
    }
    
    button {
        line-height: 1.3;
        padding: 0.3rem 0.5rem;
        border: none;
        color: grey;
        position: absolute;
        top: 20%;
        right: 7%;
        background: transparent;

    }

    ul {
        display: flex;
        list-style: none;
        justify-content: flex-start;
        width: 100%;
        padding: 0rem 10%;
        flex-wrap: wrap;
        @media (max-width: 768px){
            justify-content: space-between;
        }

        @media (max-width: 480px){
            justify-content: space-evenly;
        }
    }

    li {
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        &:hover {
            background-color: #252525;
        }

        &:last-child:hover {
            background-color: #353535;
        }
    }
    .form {
        margin-left: auto;
        position: relative;
        overflow: visible;
        min-width: 10rem;

        @media (max-width: 768px){
            margin: auto;
        }

        @media (max-width: 480px){
            margin: 0;
        }

        .live-search {
          position: absolute;
          top: 80%;
          left: 8%;
          min-width: 90%;
          width: auto;
          height: 11rem;
          background-color: white;
          z-index: 5;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;

          a {
            padding: 0.3rem;
            color: #353535;
            white-space: nowrap;
            &:hover {
              background-color: #cfcfcf;
            }
          }
        }
        .hidden {
          display: none;
        }
    }

    .genres, .popular {
        position: relative;
    }

    .nav-btn {
      color: white;
      position: relative;
      font-size: 1rem;
      padding-top: 0;
      width: 100%;
      height: 100%;
    }
`;

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
