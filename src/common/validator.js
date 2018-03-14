import { formatCurrency } from './../utils/formatUtils'
import StringUtils from './../utils/stringUtils'

const REGEX_COMPANY_NAME = /(^[A-z]+([A-z0-9/ \x2e\x2d\x2c\x2f\x28\x29\x26]){4,})+$/

export const required = errorMessage => value =>
  StringUtils.isNotEmpty(value) ? undefined : errorMessage

export const minRequired = minValue => errorMessage => value =>
  value >= minValue ? undefined : `${errorMessage} Rp${formatCurrency(minValue)}`

export const checkCompanyNameValid = errorMessage => value =>
  (value && REGEX_COMPANY_NAME.test(value) && value.match(/[A-z]/g).length >= 3) ? void 0 : errorMessage
