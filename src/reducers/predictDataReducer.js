import ActionType from '../actions/actionType'

const initialState = {
    dataList:  []
}

const predictDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_PREDICT_DATA_LIST:
            return {...state}
        case ActionType.GET_PREDICT_DATA_LIST_SUCCESS:
            return { ...state, dataList: action.payload};
        default:
            return state
    }
}

export default predictDataReducer
