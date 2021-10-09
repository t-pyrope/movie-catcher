const initState = {
  searchedMovie: [],
  searchedPerson: [],
  movieError: '',
  personError: '',
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCH_MOVIE':
      return {
        ...state,
        searchedMovie: action.payload.searchedMovie,
        movieError: '',
      };
    case 'FETCH_SEARCH_PERSON':
      return {
        ...state,
        searchedPerson: action.payload.searchedPerson,
        personError: '',
      };
    case 'NO_MOVIE_FOUND':
      return {
        ...state,
        searchedMovie: [],
        movieError: 'No movie found',
      };
    case 'NO_PERSON_FOUND':
      return {
        ...state,
        searchedPerson: [],
        personError: 'No person found',
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
