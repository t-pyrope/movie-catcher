import {
  FETCH_ADULTS_MOVIES,
  FETCH_KIDS_MOVIES,
  FETCH_MOVIES,
  FETCH_TRENDING_MOVIES,
  LOAD_FAILED,
  LOAD_GENRE_MOVIES,
  LOADING_MOVIES,
} from '../actions/actionTypes';

const initState = {
  trending: [],
  trendingTotal: 0,
  kids: [],
  kidsTotal: 0,
  genreMovies: [],
  adults: [],
  adultsTotal: 0,
  isLoading: false,
  totalPages: 0,
  id: null,
  isFailed: false,
  sortType: 'popularity.desc',
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        trending: action.payload.trending,
        kids: action.payload.kids,
        adults: action.payload.adults,
        isLoading: false,
        isFailed: false,
      };
    case FETCH_TRENDING_MOVIES:
      return {
        ...state,
        trending: action.payload.trending,
        trendingTotal: action.payload.trendingTotal,
      };
    case FETCH_KIDS_MOVIES:
      return {
        ...state,
        kids: action.payload.kids,
        kidsTotal: action.payload.kidsTotal,
      };
    case FETCH_ADULTS_MOVIES:
      return {
        ...state,
        adults: action.payload.adults,
        adultsTotal: action.payload.adultsTotal,
      };
    case LOAD_GENRE_MOVIES:
      return {
        ...state,
        genreMovies: action.payload.genreMovies,
        totalPages: action.payload.totalPages,
        isLoading: false,
        isFailed: false,
        id: action.payload.id,
        sortType: action.payload.sortType,
      };
    case LOADING_MOVIES:
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      };
    case LOAD_FAILED:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
