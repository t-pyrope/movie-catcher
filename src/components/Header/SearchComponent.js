import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';
import search from '../../helpers/utils';
import navigateArrowKeys from '../../helpers/navigateArrowKeys';
import { liveSearchURL } from '../../api';

const SearchComponent = () => {
  const liveSearch = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const [textInput, setTextInput] = useState('');
  const [liveSearchMovies, setLiveSearchMovies] = useState([]);

  console.log('hello');
  console.log('hello');
  console.log('hello');

  useEffect(() => {
    liveSearch.current.classList.add('searchForm__liveSearch_hidden');
    setLiveSearchMovies([]);
    setTextInput('');
  }, [location]);

  const searched = async (value) => {
    if (value !== '') {
      liveSearch.current.classList.remove('searchForm__liveSearch_hidden');
      const res = await search(liveSearchURL(value));
      const movies = await res.results.slice(0, 6);
      setLiveSearchMovies(movies);
    } else {
      liveSearch.current.classList.add('searchForm__liveSearch_hidden');
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
    liveSearch.current.classList.add('searchForm__liveSearch_hidden');
  };

  return (
    <div>
      <form onSubmit={searchMovieHandler}>
        <input type="text" value={textInput} onChange={inputHandler} className="searchForm__input" />
        <button type="submit" aria-label="start search" className="searchForm__button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="searchForm__liveSearch searchForm__liveSearch_hidden" ref={liveSearch}>
        {liveSearchMovies.length && liveSearchMovies.map((movie) => (
          <a className="searchForm__searchedItem" href={`/movies/${movie.id}`} key={movie.id} onKeyDown={(e) => navigateArrowKeys(e, e.currentTarget)}>{movie.title}</a>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
