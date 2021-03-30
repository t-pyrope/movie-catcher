import axios from 'axios';
import {trendingURL, searchMovieURL, kidMovieURL} from '../api';

export const loadMovies = (media_type, time_window, sort_type) => async(dispatch) => {
    const trendingData = await axios.get(trendingURL(media_type, time_window, sort_type));
    console.log(trendingURL(media_type, time_window, sort_type));
    
    const kidData = await axios.get(kidMovieURL(sort_type));
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            trending: trendingData.data.results,
            kids: kidData.data.results,
        }
    })
}

export const searchMovie = (movie_name) => async (dispatch) => {
    const searchData = await axios.get(searchMovieURL(movie_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchData.data.results,
        }
    })
}