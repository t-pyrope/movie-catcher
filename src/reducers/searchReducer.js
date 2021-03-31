const initState = {searchedMovie: [], searchedPerson: []}

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_SEARCH":
            return {
                ...state,
                searchedMovie: action.payload.searchedMovie,
                searchedPerson: action.payload.searchedPerson,
            }
        default:
            return {
                ...state,
            }
    }
}

export default searchReducer