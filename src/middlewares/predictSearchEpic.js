import { getConfigurationsSuccess, getConfigurationsFailed } from './../actions/actionCreator'
import ActionType from './../actions/actionType'
import getConfigurations from './getConfigurations'
import ConfigurationsService from "../services/configurations.service";
import CacheUtils from "../utils/cacheUtils";
import PredictService from "../services/predictService";
import {defaultConfig} from "../common/constants";
import ActionFactory from "../actions/actionFactory";

const predictSearchEpic = (action$, store) =>
    action$.ofType(ActionType.GET_PREDICT_DATA_LIST)
    .mergeMap(action => {
            let state = action.payload;

            let formData = state;
            return new PredictService(store.dispatch).predictSearch(formData)
                .map(okResp => ActionFactory.create(ActionType.GET_PREDICT_DATA_LIST_SUCCESS, okResp))
                .catch(error => ActionFactory.create(ActionType.GET_PREDICT_DATA_LIST_ERROR, error))
        }
    )


//
// function getPredictSearchData ({dispatch, formData}) {
//     const fetchConfig = new PredictService(dispatch)
//         .predictSearch(formData)
//         .map(resp => resp.data)
//         .map(({ dataList }) =>
//             (dataList &&
//                 dataList.reduce((acc, cur) => ({ ...acc, ...{ [cur.key]: cur.value } }), {})) ||
//             {})
//         .map(data => useDataDefault(
//             mapObjectResponseToLocalData(data))
//         )
//         .map(dataList => ({data: dataList}))
//
//     //caching data to local store
//     return CacheUtils.handleRequest(fetchConfig, CacheUtils.LOCAL_STORAGE_KEY_GET_DATA_CONFIG)
// }
//
// const mapObjectResponseToLocalData = (data) => ({
//     dataList: [{
//         data_1: data['data_1'] || "data1",
//         data_2: Number(data['data_2']) || 222,
//         data_3: Number(data['data_3']) || 333
//     }]
// })
//
// const useDataDefault = (data = useDataDefault) => data

export default predictSearchEpic
