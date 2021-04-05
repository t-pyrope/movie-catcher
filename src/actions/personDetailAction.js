import axios from 'axios';
import { personDetailURL, personMoviesURL } from '../api';

const loadPersonDetail = (personId) => async (dispatch) => {
  dispatch({ type: 'LOADING_PERSON' });

  const personData = await axios.get(personDetailURL(personId));
  const personMoviesData = await axios.get(personMoviesURL(personId));

  dispatch({
    type: 'LOAD_PERSON',
    payload: {
      person: personData.data,
      personMovies: personMoviesData.data.results,
    },
  });
};

export default loadPersonDetail;
