import axios from 'axios';
import { peopleURL } from '../api';

const loadPeople = (page) => async (dispatch) => {
  dispatch({ type: 'LOADING_PEOPLE' });
  axios.get(peopleURL(page)).then((res) => {
    dispatch({
      type: 'LOAD_PEOPLE',
      payload: {
        people: res.data.results,
        peoplePages: res.data.total_pages,
      },
    });
  }).catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err.message);
    dispatch({ type: 'PEOPLE_FAILED' });
  });
};

export default loadPeople;
