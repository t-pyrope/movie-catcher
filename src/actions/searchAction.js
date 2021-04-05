import axios from 'axios';
import { searchMovieURL, searchPersonURL } from '../api';

const fetchSearch = (searchName, page) => async (dispatch) => {
  const searchMovieData = await axios.get(searchMovieURL(searchName, page));
  const searchPersonData = await axios.get(searchPersonURL(searchName, page));
  dispatch({
    type: 'FETCH_SEARCH',
    payload: {
      searchedMovie: searchMovieData.data.results,
      searchedPerson: searchPersonData.data.results,
    },
  });
};

export default fetchSearch;
