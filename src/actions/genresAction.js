import axios from 'axios';
import { genresListURL } from '../api';
import { LOAD_GENRES, LOADING_GENRES } from './actionTypes';

const loadGenres = () => async (dispatch) => {
  dispatch({ type: LOADING_GENRES });
  axios
    .get(genresListURL())
    .then((res) => {
      dispatch({
        type: LOAD_GENRES,
        payload: res.data,
      });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err.message);
    });
};

export default loadGenres;
