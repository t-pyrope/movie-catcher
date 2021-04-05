import axios from 'axios';
import { movieDetailURL } from '../api';

const loadDetail = (movieId) => async (dispatch) => {
  dispatch({ type: 'LOADING_DETAIL' });

  const detailData = await axios.get(movieDetailURL(movieId));
  dispatch({
    type: 'FETCH_DETAIL',
    payload: {
      detail: detailData.data,
    },
  });
};

export default loadDetail;
