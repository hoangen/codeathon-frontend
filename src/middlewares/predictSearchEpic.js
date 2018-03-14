import ActionType from './../actions/actionType'
import PredictService from "../services/predictService";
import ActionFactory from "../actions/actionFactory";

const predictSearchEpic = (action$, store) =>
    action$.ofType(ActionType.GET_PREDICT_DATA_LIST)
    .mergeMap(action => {
            let formData = action.payload;

            return new PredictService(store.dispatch).predictSearch(formData)
                .map(resp => ActionFactory.create(ActionType.GET_PREDICT_DATA_LIST_SUCCESS, resp))
        }
    )


const mapObjectResponseToStateData = (data, state) => ({

})

const mapObjectResponseToLocalData = (data) => ({
    dataList: [{
        data_1: data['data_1'] || "data1",
        data_2: Number(data['data_2']) || 222,
        data_3: Number(data['data_3']) || 333
    }]
})
//
// const useDataDefault = (data = useDataDefault) => data

export default predictSearchEpic
