
import { combineEpics } from 'redux-observable'
import {timeLoggerEpic} from './timeLogger.epic'
import predictSearchEpic from "./predictSearchEpic";
import modelUploadEpic from "./modelUploadEpic";

const rootEpic = combineEpics(
    predictSearchEpic,
    modelUploadEpic,
  timeLoggerEpic
)

export default rootEpic
