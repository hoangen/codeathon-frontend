
import HttpClient from './httpClient'
import Base64 from '../utils/base64Utils'
import DeviceUtils from '../utils/deviceUtils'
import ServiceEndpoint from './serviceEndpoint'
import ActionFactory from '../actions/actionFactory'
import ActionType from '../actions/actionType'

class BaseService {

    constructor(dispatch) {
        this.serviceEndpoint = new ServiceEndpoint()
        this.httpClient = new HttpClient()
        this.dispatch = dispatch
    }

    /**
     * Create request headers with Msisdn header and Authorization header of bearer token
     */
    createBearerAuthRequestHeaders(accessToken) {
        var requestHeaders = {
            'Msisdn': this.getMsisdn()
        }

        if (accessToken) {
            return {
                ...requestHeaders,
                'Authorization': `Bearer ${accessToken}`
            }
        }

        return requestHeaders
    }

    /**
     * get device msisdn number using the browser's fingerprint
     */
    getMsisdn() {
        return DeviceUtils.getDeviceId()
    }

    /**
     * Encrypt user password
     * @param {string} password staff's password
     */
    encryptPassword(password) {
        return Base64.encode(password)
    }

    /**
     * To handle the common error such as 500, 4xx
     * @param {XHR Http Error} error the XMLHttpRequest's Error object
     */
    handleHttpError(error) {
        switch (error.status) {
            case 401:
                this.dispatch(ActionFactory.ofType(ActionType.API_ERROR_UNAUTHORIZED))
                break
            case 403:
                this.dispatch(ActionFactory.ofType(ActionType.API_ERROR_FORBIDDEN))
                break
            case 0:
                this.dispatch(ActionFactory.ofType(ActionType.API_ERROR_NETWORK_ERROR))
                break
            default:
                this.dispatch(ActionFactory.ofType(ActionType.API_ERROR_INTERNAL_SERVER_ERROR))
        }
    }
}

export default BaseService
