import axios from 'axios';
import {peopleURL} from '../api';

export const loadPeople = (page) => async (dispatch) => {
    const peopleData = await axios.get(peopleURL(page));
    dispatch({
        type: "LOAD_PEOPLE",
        payload: {
            people: peopleData.data.results,
            peoplePages: peopleData.data.total_pages,
        },
    })
}