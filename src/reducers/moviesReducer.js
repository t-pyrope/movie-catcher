const initState = {
    trending: [],
    kids: [],
    searched: [],
    genreMovies: [],
    isLoading: true,
}

const moviesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_MOVIES":
            return {
                ...state,
                trending: action.payload.trending,
                kids: action.payload.kids,
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
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