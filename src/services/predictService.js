import AppService from './app.service'

export default class PredictService extends AppService {
    predictSearch (formData) {
        const authHeader = this.createBearerAuthRequestHeaders()
        const header = {
            ...authHeader
        }

        return this.httpClient
            .postAsFormUrlEncoded(this.serviceEndpoint.createCustomer, header, formData)
            .catch(error => this.handleHttpError(error))
    }
}