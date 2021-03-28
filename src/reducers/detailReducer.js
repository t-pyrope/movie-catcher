const initState = {
    detail: {}, isLoading: true
}

const detailReducer = (state=initState, action) => {
    switch(action.type){
        case "LOADING_DETAIL":
            return {...state, isLoading: true}
        case "FETCH_DETAIL":
            return {...state, detail: action.payload.detail,
            isLoading: false}
        default:
            return {...state}
    }
}

export default detailReducer;