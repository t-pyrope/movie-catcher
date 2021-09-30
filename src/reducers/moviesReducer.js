const initState = {
  trending: [],
  kids: [],
  genreMovies: [],
  adults: [],
  isLoading: true,
  totalPages: 0,
  id: null,
  isFailed: false,
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        trending: action.payload.trending,
        kids: action.payload.kids,
        adults: action.payload.adults,
      };
    case 'LOAD_GENRE_MOVIES':
      return {
        ...state,
        genreMovies: action.payload.genreMovies,
        totalPages: action.payload.totalPages,
        isLoading: false,
        isFailed: false,
        id: action.payload.id,
      };
    case 'LOADING_DETAIL':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOAD_FAILED':
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
