import axios from 'axios';
import {personDetailURL, personMoviesURL} from '../api';

export const loadPersonDetail = (person_id) => async (dispatch) => {
    dispatch({type: "LOADING_PERSON"});
    
    const personData = await axios.get(personDetailURL(person_id));
    const personMoviesData = await axios.get(personMoviesURL(person_id));
    
    dispatch({
        type: "LOAD_PERSON",
        payload: {
            person: personData.data,
            personMovies: personMoviesData.data.results,
        }
    })
}