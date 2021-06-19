import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loadGenres from '../../actions/genresAction';
import { loadGenreMovies } from '../../actions/moviesAction';
import './header.scss';
import SearchComponent from './SearchComponent';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  useEffect(() => {
    dispatch(loadGenres());
  }, [dispatch, location]);

  const { genres } = useSelector((state) => state.genres);

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
    dispatch(loadGenreMovies(genreId, '1', 'popularity.desc'));
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
    <header className="header">
      <h1 className="header__logo">
        <Link to="/" id="logo">Movie catcher</Link>
      </h1>
      <nav className="header__body">
        <ul className="mainNav">
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
              <div className="genre-list dropdown" onMouseLeave={closeGenreListHandler}>
                {genres.map((genre) => (
                  <p key={genre.id}>
                    <button className="mainNav__button mainNav__button_navItem" type="button" id={genre.id} onClick={genreSelectHandler}>{genre.name}</button>
                  </p>
                ))}
              </div>
            )}
          </li>
          <li className="mainNav__link mainNav__link_relative">
            <button
              type="button"
              onClick={openPopularInHandler}
              className="mainNav__button"
            >
              Popular in...
            </button>
            <div className="popular-list dropdown" onMouseLeave={closePopularInHandler}>
              {years.map((year) => (
                <p key={year}><button type="button" onClick={yearSelectHandler} id={year} className="mainNav__button">{year}</button></p>
              ))}
            </div>
          </li>
          <li className="mainNav__link">
            <button type="button" onClick={openPeopleHandler} className="mainNav__button">People</button>
          </li>
          <li className="searchForm">
            <SearchComponent />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
