import axios from 'axios';
import {genresListURL} from '../api';

const loadGenres = () => async(dispatch) => {
    dispatch({type: "LOADING_DETAIL"});
    const genresData = await axios.get(genresListURL());
    dispatch({
        type: "LOAD_GENRES",
        payload: genresData.data,
    })
}

export default loadGenres;