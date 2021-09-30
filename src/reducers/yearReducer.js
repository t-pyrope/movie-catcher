const initState = { yearMovies: [], totalPages: 0 };

const yearReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_YEAR':
      return {
        ...state,
        yearMovies: action.payload.yearMovies,
        totalPages: action.payload.totalPages,
      };
    default:
      return { ...state };
  }
};

export default yearReducer;
