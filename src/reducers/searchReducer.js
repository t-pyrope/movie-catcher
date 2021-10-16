const initState = {
  searched: '',
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
        searched: action.payload.searched,
        searchedPerson: [],
        personTotalPages: 0,
      };
    case 'FETCH_SEARCH_PERSON':
      return {
        ...state,
        searchedPerson: action.payload.searchedPerson,
        personError: '',
        personTotalPages: action.payload.personTotalPages,
        searchedMovie: [],
        movieTotalPages: 0,
      };
    case 'NO_MOVIE_FOUND':
      return {
        ...state,
        searchedMovie: [],
        movieError: 'No movie found',
        movieTotalPages: 0,
        searched: action.payload.searched,
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
