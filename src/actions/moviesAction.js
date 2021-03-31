import axios from 'axios';
import {trendingURL, kidMovieURL, genreMoviesURL, adultMovieURL} from '../api';

export const loadMovies = (media_type, time_window, sort_type, page) => async(dispatch) => {
    
    const trendingData = await axios.get(trendingURL(media_type, time_window, sort_type, page));
    const kidData = await axios.get(kidMovieURL(sort_type, page));
    const adultData = await axios.get(adultMovieURL(sort_type, page))
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            trending: trendingData.data.results,
            kids: kidData.data.results,
            adults: adultData.data.results,
        }
    })
}

export const loadGenreMovies = (genre_id, page) => async (dispatch) => {
    dispatch({type: "LOADING_DETAIL"});

    const genreMoviesData = await axios.get(genreMoviesURL(genre_id, page));
    console.log(genreMoviesURL(genre_id, page));
    console.log(genreMoviesData);
    dispatch({
        type: "LOAD_GENRE_MOVIES",
        payload: {
            genreMovies: genreMoviesData.data.results,
            genrePages: genreMoviesData.data.total_pages,
        },
    })
}