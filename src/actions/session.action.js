import ActionType from '../actions/actionType'
import ActionFactory from '../actions/actionFactory'

export const revokeCustomerSession = accessToken => ActionFactory.create(ActionType.REVOKE_CUSTOMER_SESSION, accessToken)

export const revokeCustomerSessionSuccess = apiResponse => ActionFactory.create(
	ActionType.REVOKE_CUSTOMER_SESSION_SUCCESS, apiResponse)

export const revokeCustomerSessionFailed = apiResponse => ActionFactory.create(
	ActionType.REVOKE_CUSTOMER_SESSION_FAILED, apiResponse)

