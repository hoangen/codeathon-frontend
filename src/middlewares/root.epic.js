
import { combineEpics } from 'redux-observable'
import getConfigurationsEpic from './configurations.epic'
import {timeLoggerEpic} from './timeLogger.epic'
import initCustomerSessionEpic from './session.epic'

const rootEpic = combineEpics(
  getConfigurationsEpic,
    initCustomerSessionEpic,
  timeLoggerEpic
)

export default rootEpic
