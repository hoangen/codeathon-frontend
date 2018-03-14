import ActionType from '../actions/actionType'
import ActionFactory from '../actions/actionFactory'

export const getConfigurations = () => ActionFactory.ofType(ActionType.GET_LOAN_CONFIG)

export const getConfigurationsSuccess = apiResponse => ActionFactory.create(
	ActionType.GET_LOAN_CONFIG_SUCCESS, apiResponse)

export const getConfigurationsFailed = apiResponse => ActionFactory.create(
	ActionType.GET_LOAN_CONFIG_FAILED, apiResponse)

export const getCompanyName = value => ActionFactory.create(
	ActionType.GET_COMPANY_NAME, value)

export const getCompanyNameDone = companyNameList => ActionFactory.create(
	ActionType.GET_COMPANY_NAME_DONE, companyNameList)

export const clearCompanyName = () => ActionFactory.create(ActionType.CLEAR_COMPANY_NAME)

export const initCustomerSession = (reCaptchaToken) => ActionFactory.create(ActionType.INIT_CUSTOMER_SESSION, reCaptchaToken)

export const initCustomerSessionSuccess = (response) => ActionFactory.create(ActionType.INIT_CUSTOMER_SESSION_SUCCESS, response)

export const initCustomerSessionFail = (error) => ActionFactory.create(ActionType.INIT_CUSTOMER_SESSION_FAILED, error)

export const getDecisionStatus = () => ActionFactory.ofType(ActionType.GET_DECISION_STATUS)

export const predictSearch = (formData) => ActionFactory.create(ActionType.GET_PREDICT_DATA_LIST, formData)

export const getDecisionStatusSuccess = apiResponse => ActionFactory.create(
	ActionType.GET_DECISION_STATUS_SUCCESS, apiResponse)

export const getDecisionStatusFailed = apiResponse => ActionFactory.create(
	ActionType.GET_DECISION_STATUS_FAILED, apiResponse)

export const logTime = ({pageName, duration}) => ActionFactory.create(ActionType.LOG_TIME, {pageName, duration})
