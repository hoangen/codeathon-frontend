import EnvironmentVariables from './../common/environmentVariables'

export const Endpoint = {
  BASE_PATH: 'api/codeathon',

  INIT_CUSTOMER_SESSION: 'session/init',
  CREATE_CUSTOMER: 'customers/createinformation',
  SETTING_CONFIGURATION: 'settings/configurations',
  REVOKE_CUSTOMER_SESSION: 'session/finalize'
}
export const GeneralEndpoint = {
  SEARCHING_COMPANY_NAME: 'search/company'
}

/**
 * A wrapper of all configuration relevant to web service such as environment, authentication & service endpoint
 */
export default class ServiceEndpoint {
  generalDomain = EnvironmentVariables.SVC_BASE_URL ? `${EnvironmentVariables.SVC_BASE_URL}/api` : '/api'

  getFullServiceEndpoint (endpoint) {
    if (EnvironmentVariables.SVC_BASE_URL) {
      return `${EnvironmentVariables.SVC_BASE_URL}/${Endpoint.BASE_PATH}/${endpoint}`
    } else {
      return `/${Endpoint.BASE_PATH}/${endpoint}`
    }
  }

    /**
     * API endpoint to init customer session
     */
  get initCustomerSessionEndpoint () {
    return this.getFullServiceEndpoint(Endpoint.INIT_CUSTOMER_SESSION)
  }

  /**
   * API endpoint to get Configuration
   */
  get getConfigurationEndpoint () {
      return this.getFullServiceEndpoint(Endpoint.SETTING_CONFIGURATION)
  }

  get revokeCustomerSession () {
    return this.getFullServiceEndpoint(Endpoint.REVOKE_CUSTOMER_SESSION)
  }
  //
  // getCompanyNameEndpoint (queryName, limitedRecord) {
  //   return `${this.generalDomain}/${GeneralEndpoint.SEARCHING_COMPANY_NAME}?name=${queryName}&limit=${limitedRecord}`
  // }
}
