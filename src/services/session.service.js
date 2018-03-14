import BaseService from './base.service'

/**
 * Web services for things relevant to app common
 */
class SessionService extends BaseService {
    /**
     * revoke custom session
     */
    revokeCustomerSession(sessionInfo) {
        var authHeader = this.createBearerAuthRequestHeaders(sessionInfo.sessionKey)
        return this.httpClient
            .postAsJson(this.serviceEndpoint.revokeCustomerSession, authHeader, sessionInfo)
    }

    /**
     * init customer session prepare to apply for a loan
     */
    initCustomerSession(requestBody) {
        console.log("SessionService.initCustomerSession");
        var authHeader = this.createBearerAuthRequestHeaders()
        var requestBody = {
            'method': this.authMethod, requestBody
        }

        return this.httpClient
            .postAsJson(this.serviceEndpoint.initCustomerSessionEndpoint, authHeader, requestBody)
            .catch(error => this.handleHttpError(error))
    }
}

export default SessionService
