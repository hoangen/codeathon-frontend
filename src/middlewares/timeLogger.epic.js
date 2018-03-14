import ActionType from './../actions/actionType'

export const timeLoggerEpic = (action$, store) =>
  action$.ofType(ActionType.LOG_TIME)
    .do(data => console.log('Capture duration time in pages', store.getState().timeTracking))
    .ignoreElements()

export default timeLoggerEpic
