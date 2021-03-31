const initialState = {person: [], personMovies: [], isLoading: true};

const personReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOAD_PERSON":
            return {
                ...state,
                person: action.payload.person,
                personMovies: action.payload.personMovies,
                isLoading: false,
            }
        case "LOADING_PERSON":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state}
    }
}

export default personReducer;