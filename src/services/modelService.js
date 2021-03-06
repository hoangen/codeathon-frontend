import AppService from './app.service'

export default class ModelService extends AppService {
    uploadModelFile (formData) {
        const authHeader = this.createBearerAuthRequestHeaders()
        const header = {
            ...authHeader
        }

        return this.httpClient
            .postAsMultiPartForm(this.serviceEndpoint.getUploadModelFileEndpoint, header, formData)
            .catch(error => this.handleHttpError(error))
    }

    downloadModelFile () {
        const authHeader = this.createBearerAuthRequestHeaders()
        const header = {
            ...authHeader
        }

        return this.httpClient
            .postAsFormUrlEncoded(this.serviceEndpoint.getPredictDataEndpoint, header)
            .catch(error => this.handleHttpError(error))
    }

}