import axios from 'axios';
import {yearMoviesURL} from '../api';

export const fetchYearMovies = (year, page, sort_type) => async (dispatch) => {
    const yearData = await axios.get(yearMoviesURL(year, page, sort_type));
    dispatch({
        type: "FETCH_YEAR",
        payload: {
            yearMovies: yearData.data.results,
        }
    })
}