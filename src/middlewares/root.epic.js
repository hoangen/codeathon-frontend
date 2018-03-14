
import { combineEpics } from 'redux-observable'
import getConfigurationsEpic from './configurations.epic'
import {timeLoggerEpic} from './timeLogger.epic'
import initCustomerSessionEpic from './session.epic'
import predictSearchEpic from "./predictSearchEpic";
import modelUploadEpic from "./modelUploadEpic";

const rootEpic = combineEpics(
  getConfigurationsEpic,
    initCustomerSessionEpic,
    predictSearchEpic,
    modelUploadEpic,
  timeLoggerEpic
)

export default rootEpic
