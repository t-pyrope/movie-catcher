import axios from 'axios';
import {yearMoviesURL} from '../api';

export const fetchYearMovies = (year, page) => async (dispatch) => {
    const yearData = await axios.get(yearMoviesURL(year, page));
    console.log(yearData)
    dispatch({
        type: "FETCH_YEAR",
        payload: {
            yearMovies: yearData.data.results,
        }
    })
}