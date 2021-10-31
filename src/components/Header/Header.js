import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loadGenres from '../../actions/genresAction';
import './header.scss';
import SearchComponent from './SearchComponent';
import NavDropdown from './NavDropdown';
import years from './years';

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    dispatch(loadGenres());
  }, [dispatch, location]);

  useEffect(() => {
    if (activeTab !== 0) setActiveTab(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const { genres } = useSelector((state) => state.genres);

  const toggleDropdown = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    } else if (activeTab !== 0) setActiveTab(0);
  };

  const openPeopleHandler = () => {
    history.push('/people');
  };

  const onDropItemClick = (e) => {
    const selectId = e.target.id;
    const selectName = e.target.name;
    const currentUrl = window.location.pathname + window.location.search;
    if (selectName === 'genre'
      && currentUrl !== `/genres?genre=${selectId.toLowerCase()}&sort=popularity.desc&page=1`
    ) {
      history.push(`/genres?genre=${selectId.toLowerCase()}&sort=popularity.desc&page=1`);
    }
    if (selectName === 'year'
      && currentUrl !== `year?year=${selectId}&sort=popularity.desc&page=1`
    ) {
      history.push(`year?year=${selectId}&sort=popularity.desc&page=1`);
    }
    setActiveTab(0);
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
              className="mainNav__button"
              type="button"
              onClick={() => toggleDropdown(1)}
            >
              Genres
            </button>
            {genres.length
              && activeTab === 1
              && (
              <NavDropdown
                list={genres}
                setActiveTab={onDropItemClick}
              />
              )}
          </li>
          <li className="mainNav__link mainNav__link_relative">
            <button
              type="button"
              onClick={() => toggleDropdown(2)}
              className="mainNav__button"
            >
              Popular in...
            </button>
            {activeTab === 2 && (
              <NavDropdown
                list={years}
                setActiveTab={onDropItemClick}
              />
            )}
          </li>
          <li className="mainNav__link">
            <button
              type="button"
              onClick={openPeopleHandler}
              className="mainNav__button"
            >
              People
            </button>
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
