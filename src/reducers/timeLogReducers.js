import ActionType from '../actions/actionType'

const timeLogReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.LOG_TIME:
      const {pageName, duration} = action.payload
      return {
        ...state,
        [pageName]: (state[pageName] || 0) + duration
      }
    default:
      return state
  }
}

export default timeLogReducer
