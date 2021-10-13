const initState = {
  searchedMovie: [],
  searchedPerson: [],
  movieTotalPages: 0,
  personTotalPages: 0,
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
        movieTotalPages: action.payload.movieTotalPages,
      };
    case 'FETCH_SEARCH_PERSON':
      return {
        ...state,
        searchedPerson: action.payload.searchedPerson,
        personError: '',
        personTotalPages: action.payload.personTotalPages,
      };
    case 'NO_MOVIE_FOUND':
      return {
        ...state,
        searchedMovie: [],
        movieError: 'No movie found',
        movieTotalPages: 0,
      };
    case 'NO_PERSON_FOUND':
      return {
        ...state,
        searchedPerson: [],
        personError: 'No person found',
        personTotalPages: 0,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
