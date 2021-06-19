import axios from 'axios';
import { movieDetailURL } from '../api';

const loadDetail = (movieId) => async (dispatch) => {
  dispatch({ type: 'LOADING_DETAIL' });

  await axios.get(movieDetailURL(movieId)).then((res) => {
    dispatch({
      type: 'FETCH_DETAIL',
      payload: {
        detail: res.data,
      },
    });
  }).catch(() => {
    dispatch({
      type: 'LOAD_MOVIE_FAILED',
    });
  });
};

export default loadDetail;
