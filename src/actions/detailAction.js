import axios from 'axios';
import {movieDetailURL} from '../api';

export const loadDetail = (movie_id) => async(dispatch) => {
    dispatch({type: "LOADING_DETAIL"});

    const detailData = await axios.get(movieDetailURL(movie_id));
    dispatch({
        type: "FETCH_DETAIL",
        payload: {
            detail: detailData.data,
        }
    })
}