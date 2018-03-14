import AppService from './app.service'

export default class CustomerService extends AppService {
  createCustomer (reCaptchaToken, customerLoanInfo) {
    const authHeader = this.createBearerAuthRequestHeaders()
    const header = {
      ...authHeader,
      recaptchaToken: reCaptchaToken
    }

    return this.httpClient
            .postAsJson(this.serviceEndpoint.createCustomer, header, customerLoanInfo)
            .catch(error => this.handleHttpError(error))
  }
}
