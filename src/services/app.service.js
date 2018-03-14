import BaseService from './base.service'
import DeviceUtils from '../utils/deviceUtils'

/**
 * Web services for things relevant to app common
 */
class AppService extends BaseService {

    createBearerAuthRequestHeaders(token) {
        return super.createBearerAuthRequestHeaders(token)
    }
}

export default AppService