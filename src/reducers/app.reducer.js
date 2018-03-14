import ActionType from './../actions/actionType'
import AppPageURL from '../common/appPageURL'

const initialState = {}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.API_ERROR_INTERNAL_SERVER_ERROR:
            return {
                ...state,
                urlToRedirect: AppPageURL.INTERNAL_SERVER_ERROR
            }

        case ActionType.API_ERROR_UNAUTHORIZED:
            return {
                ...state,
                urlToRedirect: AppPageURL.UNAUTHORIZED
            }

        case ActionType.API_ERROR_FORBIDDEN:
            return {
                ...state,
                urlToRedirect: AppPageURL.FORBIDDEN
            }

        case ActionType.PAGE_REDIRECTED:
            return {
                ...state,
                urlToRedirect:null
            }

        default:
            return state
    }
}

export default appReducer