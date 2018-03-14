import BaseService from './base.service'

export default class CompanyNameService extends BaseService {
  getCompanyName (queryName, limitedRecord) {
    var authHeader = this.createBearerAuthRequestHeaders()
    return this.httpClient
            .get(this.serviceEndpoint.getCompanyNameEndpoint(encodeURIComponent(queryName), limitedRecord), authHeader)
            .catch(error => this.handleHttpError(error))
  }
}
