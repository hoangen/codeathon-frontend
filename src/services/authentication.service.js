import AppService from './app.service'

/**
 * Web services for things relevant to user authentication
 */
class AuthenticationService extends AppService {
    constructor(dispatch) {
        super(dispatch)
        this.authMethod = 'WEB'
    }

    /**
     * init customer session prepare to apply for a loan
     */
    initCustomerSession() {
        var authHeader = this.createBearerAuthRequestHeaders()
        var requestBody = {
            'method': this.authMethod
        }
        
        return this.httpClient
            .postAsJson(this.serviceEndpoint.initCustomerSessionEndpoint, authHeader, requestBody)
            .catch(error => this.handleHttpError(error))
    }
}

export default AuthenticationService