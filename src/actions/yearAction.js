import axios from 'axios';
import { yearMoviesURL } from '../api';

const fetchYearMovies = (year, page, sortType) => async (dispatch) => {
  const yearData = await axios.get(yearMoviesURL(year, page, sortType));
  dispatch({
    type: 'FETCH_YEAR',
    payload: {
      yearMovies: yearData.data.results,
      totalPages: yearData.data.total_pages,
    },
  });
};

export default fetchYearMovies;
