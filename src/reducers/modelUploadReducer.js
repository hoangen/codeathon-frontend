import ActionType from '../actions/actionType'

const initialState = {
    status: false
}

const modelUploadReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ActionType.UPLOAD_MODEL_FILE:
            return {...state}
        case ActionType.UPLOAD_MODEL_FILE_SUCCESS:
            return { ...state, status: true};
        default:
            return state
    }
}

export default modelUploadReducer
