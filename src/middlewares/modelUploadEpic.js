import ActionType from './../actions/actionType'
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
