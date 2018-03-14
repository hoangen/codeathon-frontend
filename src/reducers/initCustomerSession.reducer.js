import ActionType from '../actions/actionType'

const initialState = {}

/**
 * 
 * @param {initCustomerSessionAPIResponse} state API result for initCustomerSession
 * @param {ActionType} action type of action
 */
const initCustomerSessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.INIT_CUSTOMER_SESSION:
            return state
        case ActionType.INIT_CUSTOMER_SESSION_REQUEST_SUCCESS:
            return action.payload
        case ActionType.INIT_CUSTOMER_SESSION_REQUEST_FAILED:
            return action.payload
            
        default:
            return state
    }
}

export default initCustomerSessionReducer