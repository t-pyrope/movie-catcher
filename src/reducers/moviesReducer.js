const initState = {
    trending: [],
}

const moviesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_MOVIES":
            return {...state, trending: action.payload.trending}
        default:
            return {...state}
    }
}

export default moviesReducer;