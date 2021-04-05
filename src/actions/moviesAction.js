import axios from 'axios';
import {
  trendingURL, kidMovieURL, genreMoviesURL, adultMovieURL,
} from '../api';

export const loadMovies = (mediaType, timeWindow, sortType, page) => async (dispatch) => {
  const trendingData = await axios.get(trendingURL(mediaType, timeWindow, sortType, page));
  const kidData = await axios.get(kidMovieURL(sortType, page));
  const adultData = await axios.get(adultMovieURL(sortType, page));
  dispatch({
    type: 'FETCH_MOVIES',
    payload: {
      trending: trendingData.data.results,
      kids: kidData.data.results,
      adults: adultData.data.results,
    },
  });
};

export const loadGenreMovies = (genreTd, page, sortType) => async (dispatch) => {
  dispatch({ type: 'LOADING_DETAIL' });

  const genreMoviesData = await axios.get(genreMoviesURL(genreTd, page, sortType));
  dispatch({
    type: 'LOAD_GENRE_MOVIES',
    payload: {
      genreMovies: genreMoviesData.data.results,
      genrePages: genreMoviesData.data.total_pages,
    },
  });
};
