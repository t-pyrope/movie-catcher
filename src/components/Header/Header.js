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

  const openListHandler = (e) => {
    const parent = e.target.parentElement;
    parent.children[1].style.opacity = 1;
    parent.children[1].style.pointerEvents = 'all';
    return null;
  };

  const closeListHandler = (e) => {
    const { classList } = e.target;
    if (classList.contains('list')) {
      const { style } = e.target;
      style.opacity = 0;
      style.pointerEvents = 'none';
    } else if (classList.contains('list-item')) {
      const { style } = e.target.parentElement;
      style.opacity = 0;
      style.pointerEvents = 'none';
    }
  };

  const selectHandler = (e) => {
    e.stopPropagation();
    const selectId = e.target.id;
    const selectName = e.target.name;
    if (selectName === 'genre') {
      dispatch(loadGenreMovies(selectId, '1', 'popularity.desc'));
      history.push(`/genres/${selectId}`);
    }
    if (selectName === 'year') history.push(`/year/${selectId}`);

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
              onClick={openListHandler}
              onKeyDown={openListHandler}
            >
              Genres
            </button>
            {genres.length && (
              <div className="list dropdown" onMouseLeave={closeListHandler}>
                {genres.map((genre) => (
                  <p key={genre.id} className="list-item">
                    <button
                      name="genre"
                      className="mainNav__button mainNav__button_navItem"
                      type="button"
                      id={genre.id}
                      onClick={selectHandler}
                    >
                      {genre.name}
                    </button>
                  </p>
                ))}
              </div>
            )}
          </li>
          <li className="mainNav__link mainNav__link_relative">
            <button
              type="button"
              onClick={openListHandler}
              className="mainNav__button"
            >
              Popular in...
            </button>
            <div className="list dropdown" onMouseLeave={closeListHandler}>
              {years.map((year) => (
                <p key={year} className="list-item">
                  <button
                    type="button"
                    name="year"
                    onClick={selectHandler}
                    id={year}
                    className="mainNav__button"
                  >
                    {year}
                  </button>
                </p>
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
