import axios from 'axios';
import {searchMovieURL, searchPersonURL} from '../api';

export const fetchSearch = (search_name) => async (dispatch) => {
    const searchMovieData = await axios.get(searchMovieURL(search_name));
    const searchPersonData = await axios.get(searchPersonURL(search_name));
    dispatch({
        type: "FETCH_SEARCH",
        payload: {
            searchedMovie: searchMovieData.data.results,
            searchedPerson: searchPersonData.data.results,
        }
    })
}