const initState = { yearMovies: [] };

const yearReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_YEAR':
      return {
        ...state,
        yearMovies: action.payload.yearMovies,
      };
    default:
      return { ...state };
  }
};

export default yearReducer;
