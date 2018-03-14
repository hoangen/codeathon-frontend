import ActionType from '../actions/actionType'

const initialState = {}

const modelUploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.UPLOAD_MODEL_FILE:
            return {...state}
        case ActionType.UPLOAD_MODEL_FILE_SUCCESS:
            return { ...state, dataList: action.payload};
        default:
            return state
    }
}

export default modelUploadReducer
