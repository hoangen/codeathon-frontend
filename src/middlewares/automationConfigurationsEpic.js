import { getConfigurationsSuccess } from './../actions/actionCreator'
import ActionType from './../actions/actionType'
import getConfigurations from './getConfigurations'
import CacheUtils from '../utils/cacheUtils'

export default function getAutomationConfigurationsEpic (action$, store) {
  return action$.ofType(ActionType.GET_LOAN_CONFIG_AUTO)
								.mergeMap(action => (
														CacheUtils.handleRequest(
															getConfigurations(store)
															.map(({data: {configurations}}) => (
																{configurations: {...configurations, clientRecaptchaGoogle: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}}
															))
															.map(configurations => ({ data: configurations })),
														CacheUtils.LOCAL_STORAGE_KEY_GET_LOAN_CONFIG)
								))
								.map(data => getConfigurationsSuccess(data))
}
