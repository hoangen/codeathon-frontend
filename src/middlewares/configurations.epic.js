import { getConfigurationsSuccess, getConfigurationsFailed } from './../actions/actionCreator'
import ActionType from './../actions/actionType'
import getConfigurations from './getConfigurations'

const getConfigurationsEpic = (action$, store) =>
	action$
		.ofType(ActionType.GET_LOAN_CONFIG)
		.mergeMap(action => getConfigurations(store))
		.map(data => getConfigurationsSuccess(data))
		.catch(error => getConfigurationsFailed(error))

export default getConfigurationsEpic
