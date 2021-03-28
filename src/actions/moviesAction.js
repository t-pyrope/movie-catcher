import axios from 'axios';
import {trendingURL} from '../api';

export const loadMovies = (media_type, time_window) => async(dispatch) => {
    const trendingData = await axios.get(trendingURL(media_type, time_window));
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            trending: trendingData.data.results,
        }
    })
}