const initialState = {
  person: [],
  personMovies: [],
  isLoading: true,
  isFailedPerson: false,
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PERSON':
      return {
        ...state,
        person: action.payload.person,
        personMovies: action.payload.personMovies,
        isLoading: false,
        isFailedPerson: false,
      };
    case 'LOAD_PERSON_FAILED':
      return {
        ...state,
        isFailedPerson: true,
        isLoading: false,
      };
    case 'LOADING_PERSON':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default personReducer;
