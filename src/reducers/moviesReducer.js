const initState = {
    trending: [],
    kids: [],
    searched: [],
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
            return{
                ...state,
                searched: action.payload.searched,
            }        
        default:
            return {...state}
    }
}

export default moviesReducer;