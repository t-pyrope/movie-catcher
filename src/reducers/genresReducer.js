import { LOAD_GENRES, LOADING_GENRES } from '../actions/actionTypes';

const initState = { genres: [], isLoading: false };

const genresReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_GENRES:
      return {
        ...state,
        genres: action.payload.genres,
        isLoading: false,
      };
    case LOADING_GENRES:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default genresReducer;
