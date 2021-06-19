import axios from 'axios';
import { personDetailURL, personMoviesURL } from '../api';

const loadPersonDetail = (personId) => async (dispatch) => {
  dispatch({ type: 'LOADING_PERSON' });
  let personData;
  let personMoviesData;
  let error = false;

  await axios.get(personDetailURL(personId)).then((res) => {
    personData = res;
  }).catch(() => {
    error = true;
    dispatch({
      type: 'LOAD_PERSON_FAILED',
    });
  }).then(() => {
    return axios.get(personMoviesURL(personId));
  })
    .then((res) => {
      personMoviesData = res;
    })
    .catch(() => {
      error = true;
      dispatch({
        type: 'LOAD_PERSON_FAILED',
      });
    });

  if (!error) {
    dispatch({
      type: 'LOAD_PERSON',
      payload: {
        person: personData.data,
        personMovies: personMoviesData.data.results,
      },
    });
  }
};

export default loadPersonDetail;
