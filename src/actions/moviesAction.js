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

export const loadGenreMovies = (genreId, page, sortType) => async (dispatch) => {
  dispatch({ type: 'LOADING_DETAIL' });

  axios.get(genreMoviesURL(genreId, page, sortType)).then((res) => {
    if (res.data.results.length) {
      dispatch({
        type: 'LOAD_GENRE_MOVIES',
        payload: {
          genreMovies: res.data.results,
          genrePages: res.data.total_pages,
          id: genreId,
        },
      });
    } else {
      dispatch({
        type: 'LOAD_FAILED',
      });
    }
  }).catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err.message);
  });
};
