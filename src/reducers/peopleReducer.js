const initialState = { people: [], peoplePages: 0, isLoading: false };

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_PEOPLE':
      return {
        ...state,
        isLoading: true,
        people: [],
      };
    case 'LOAD_PEOPLE':
      return {
        ...state,
        people: action.payload.people,
        peoplePages: action.payload.peoplePages,
        isLoading: false,
      };
    case 'PEOPLE_FAILED':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default peopleReducer;
