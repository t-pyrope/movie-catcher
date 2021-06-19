const initState = {
  detail: {},
  isLoading: true,
  isMovieFailed: false,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOADING_DETAIL':
      return { ...state, isLoading: true };
    case 'FETCH_DETAIL':
      return {
        ...state,
        detail: action.payload.detail,
        isLoading: false,
        isMovieFailed: false,
      };
    case 'LOAD_MOVIE_FAILED':
      return {
        ...state,
        isLoading: false,
        isMovieFailed: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
