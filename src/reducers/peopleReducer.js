const initialState = {people: [], peoplePages: 0};

const peopleReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOAD_PEOPLE":
            return {
                ...state,
                people: action.payload.people,
                peoplePages: action.payload.peoplePages,
            }
        default:
            return {...state}
    }
}

export default peopleReducer;