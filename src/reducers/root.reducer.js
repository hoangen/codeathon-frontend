import { combineReducers } from 'redux'
import configurationsReducer from './configurations.reducer'
import appReducer from './app.reducer'
import { reducer as formReducer } from 'redux-form'
import companyNameReducer from './companyNameReducer'
import timeLogReducer from './timeLogReducers'
import ActionType from '../actions/actionType'
import initCustomerSessionReducer from "./initCustomerSession.reducer";
import predictDataReducer from './predictDataReducer'
import modelUploadReducer from "./modelUploadReducer";

const defaultConfigReducer = {
  getConfigurationsAPIResponse: {},
  customerSessionResponse: {}
}
const getDefautReducer = (configReducer = defaultConfigReducer) => configReducer

export const combineReducer = combineReducers({
  form: formReducer,
  app: appReducer,
  getConfigurationsAPIResponse: configurationsReducer,
  companyNames: companyNameReducer,
  customerSessionResponse: initCustomerSessionReducer,
  uploadModelFile: modelUploadReducer,
  predictData: predictDataReducer,
  timeTracking: timeLogReducer
})

const rootReducer = (state, action) => {
  if (action.type === ActionType.RESET_APP) {
    const {
      getConfigurationsAPIResponse
    } = state
    const configReducer = getDefautReducer({
      getConfigurationsAPIResponse
    })

    state = {...configReducer}
  }

  return combineReducer(state, action)
}

export default rootReducer
