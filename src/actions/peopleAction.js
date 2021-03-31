import axios from 'axios';
import {peopleURL} from '../api';

export const loadPeople = () => async (dispatch) => {
    const peopleData = await axios.get(peopleURL());
    dispatch({
        type: "LOAD_PEOPLE",
        payload: {
            people: peopleData.data.results
        },
    })
}