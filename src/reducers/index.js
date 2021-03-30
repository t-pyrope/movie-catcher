import {combineReducers} from 'redux';
import moviesReducer from './moviesReducer';
import detailReducer from './detailReducer';
import genresReducer from './genresReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    detail: detailReducer,
    genres: genresReducer,
})
export default rootReducer