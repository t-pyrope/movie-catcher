import {
  FETCH_DETAIL,
  LOAD_MOVIE_FAILED,
  LOADING_DETAIL,
} from '../actions/actionTypes';

const initState = {
  detail: null,
  isLoading: false,
  isMovieFailed: false,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_DETAIL:
      return {
        ...state,
        isLoading: true,
        detail: null,
        isMovieFailed: false,
      };
    case FETCH_DETAIL:
      return {
        ...state,
        detail: action.payload.detail,
        isLoading: false,
        isMovieFailed: false,
      };
    case LOAD_MOVIE_FAILED:
      return {
        ...state,
        isLoading: false,
        detail: null,
        isMovieFailed: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
