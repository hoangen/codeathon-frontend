import { getConfigurationsSuccess, getConfigurationsFailed } from './../actions/actionCreator'
import ActionType from './../actions/actionType'
import getConfigurations from './getConfigurations'
import ConfigurationsService from "../services/configurations.service";
import CacheUtils from "../utils/cacheUtils";
import PredictService from "../services/predictService";
import {defaultConfig} from "../common/constants";
import ActionFactory from "../actions/actionFactory";
import ModelService from "../services/modelService";

const modelUploadEpic = (action$, store) =>
    action$.ofType(ActionType.UPLOAD_MODEL_FILE)
        .mergeMap(action => {
                let state = action.payload;

                let formData = state;
                return new ModelService(store.dispatch).uploadModelFile(formData)
                    .map(okResp => ActionFactory.create(ActionType.UPLOAD_MODEL_FILE_SUCCESS, okResp))
                    .catch(error => ActionFactory.create(ActionType.UPLOAD_MODEL_FILE_ERROR, error))
            }
        )


export default modelUploadEpic
