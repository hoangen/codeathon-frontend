import ActionType from '../actions/actionType'
import ActionFactory from '../actions/actionFactory'

export const setRedirectUrl = redirectUrl => ActionFactory.create(
	ActionType.SET_REDIRECT_URL, redirectUrl)
