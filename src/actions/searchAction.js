import axios from 'axios';
import { searchMovieURL, searchPersonURL } from '../api';

const fetchSearch = (searchName, page) => async (dispatch) => {
  const searchMovieData = await axios.get(searchMovieURL(searchName, page));
  const searchPersonData = await axios.get(searchPersonURL(searchName, page));

  if (!searchMovieData.data.results.length) {
    dispatch({
      type: 'NO_MOVIE_FOUND',
    });
  } else {
    dispatch({
      type: 'FETCH_SEARCH_MOVIE',
      payload: {
        searchedMovie: searchMovieData.data.results,
      },
    });
  }

  if (!searchPersonData.data.results.length) {
    dispatch({
      type: 'NO_PERSON_FOUND',
    });
  } else {
    dispatch({
      type: 'FETCH_SEARCH_PERSON',
      payload: {
        searchedPerson: searchPersonData.data.results,
      },
    });
  }
};

export default fetchSearch;
