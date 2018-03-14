
export const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

export const ContentType = {
  FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
  JSON_TEXT: 'application/json'
}

export const RequestHeader = {
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization'
}

export const AuthenticationFlow = {
  CLIENT_CREDENTIALS: 'client_credentials',
  PASSWORD: 'password'
}

export const ReduxForm = {
  FORM_LOGIN_INFORMATION: 'loginInformation',
  FORM_PREDICT_SEARCH: 'predictSearch'
}

export const Defines = {
  MIN_MONTHLY_INCOME_IN_RUPIAH: 5000000,
  MIN_AGE_LOAN_CUSTOMER: 21,
  MAX_AGE_LOAN_CUSTOMER: 55,
  MIN_YEAR_LOAN_CUSTOMER: 1900,
  LOAN_AMOUNT_MAX_LENGTH: 15,
  CURRENCY_FORMAT: /\./g
}

export const MarriageStatus = {
  SINGLE: 'single',
  MARRIED: 'married'
}

export const MaxLength = {
    INPUT_DECLARED_INCOME: 9,
    INPUT_TOTAL_INSTALLMENT: 9,
    INPUT_ADDRESS: 255,
    INPUT_COMPANY_NAME: 100,
    INPUT_DISTRICT: 50,
    INPUT_WARD: 50,
    INPUT_PHONE_NUMBER: 15,
    INPUT_KTP: 16,
    INPUT_FULL_NAME: 100,
    INPUT_EMAIL: 100
}

export const defaultConfig = {
    interestRate: 0.0167,
    minAmount: 10000000,
    maxAmount: 30000000,
    stepAmount: 1000000,
    minTenure: 12,
    maxTenure: 18,
    timeCaching: 3600000,
    timeCarousel: 5,
    penaltyFee: 0.06,
    minIncome: 3500000,
    minAge: 21,
    desisionStatusInterval: 10,
    desisionStatusMaxInterval: 120,
    validityPeriod: 7,
    limitedRecordSearchingCompany: 10,
    otpTemplate: 'otp_template.sms.verification'
}

