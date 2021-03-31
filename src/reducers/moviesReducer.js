const initState = {
    trending: [],
    kids: [],
    genreMovies: [],
    adults: [],
    isLoading: true,
}

const moviesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_MOVIES":
            return {
                ...state,
                trending: action.payload.trending,
                kids: action.payload.kids,
                adults: action.payload.adults,
            }
        case "LOAD_GENRE_MOVIES":
            return {
                ...state,
                genreMovies: action.payload.genreMovies,
                isLoading: false,
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state}
    }
}

export default moviesReducer;