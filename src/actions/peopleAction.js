import axios from 'axios';
import { peopleURL } from '../api';

const loadPeople = (page) => async (dispatch) => {
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
  });
};

export default loadPeople;
