const initState = {genres: {}, isLoading: true};

const genresReducer = (state=initState, action) => {
    switch(action.type){
        case "LOAD_GENRES":
            return{
                ...state,
                genres: action.payload.genres,
                isLoading: false,
            }
        case "LOADING_DETAIL":
            return{
                ...state,
                isLoading: true,
            }
        default:
            return {...state}
    }
}

export default genresReducer;