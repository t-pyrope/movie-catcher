const initialState = {people: []};

const peopleReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOAD_PEOPLE":
            return {
                ...state,
                people: action.payload.people,
            }
        default:
            return {...state}
    }
}

export default peopleReducer;