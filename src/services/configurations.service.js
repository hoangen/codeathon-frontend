import BaseService from './base.service'
import DeviceUtils from '../utils/deviceUtils'

/**
 * Web services for things relevant to app common
 */
class ConfigurationsService extends BaseService {

    createBearerAuthRequestHeaders(token) {
        return super.createBearerAuthRequestHeaders(token)
    }

    /**
     * get Loan Config
     */
    getConfigurations() {
        var authHeader = this.createBearerAuthRequestHeaders(DeviceUtils.getAppToken())

        return this.httpClient
            .get(this.serviceEndpoint.getConfigurationEndpoint, authHeader)
            .catch(error => this.handleHttpError(error))
    }
}

export default ConfigurationsService
