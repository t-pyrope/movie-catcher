import {combineReducers} from 'redux';
import moviesReducer from './moviesReducer';
import detailReducer from './detailReducer';
import genresReducer from './genresReducer';
import peopleReducer from './peopleReducer';
import searchReducer from './searchReducer';
import yearReducer from './yearReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    detail: detailReducer,
    genres: genresReducer,
    people: peopleReducer,
    searched: searchReducer,
    year: yearReducer,
})
export default rootReducer