import StringUtils from './stringUtils'
import months from './../assets/months.json'

const PATTERN_NUMBER_FORMATTED = '^([0-9]*)(.[0-9]+)*$'
const PATTERN_NUMBER_START_WITH_ZERO = '^0[0-9]+$'
const PATTERN_ONLY_ONE_NUMBER = '^[1-9]$'
/**
 * Format currency to split hundred, thousand,... by specific symbol
 * @param symbol - The specific symbol like as dot, comma,...
 */
export const thousandNumberFormat = symbol => (number, maxLength) => {
  if (StringUtils.isEmpty(number)) {
    return ''
  }
  if (isNaN(number)) {
    number = number.toString()
  }
  var numberFilter = ''
  for (var i = 0; i < number.toString().length; i++) {
    if (number.toString().charAt(i) >= '0' && number.toString().charAt(i) <= '9') {
      numberFilter += number.toString().charAt(i)
    }
  }
  number = numberFilter
  if (number.toString().length === 1 && !number.toString().match(PATTERN_ONLY_ONE_NUMBER)) {
    return ''
  }
  if (maxLength && number.length >= maxLength) {
    number = number.substring(0, maxLength)
  }
  if (number.toString().match(PATTERN_NUMBER_START_WITH_ZERO)) {
    return number.substring(1)
  }
  if (!number.toString().match(PATTERN_NUMBER_FORMATTED)) {
    let newNumber = number.substring(0, number.length - 1)
    return newNumber.replace(/\B(?=(\d{3})+(?!\d))/g, symbol)
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, symbol)
}

/**
 * Format date from dd/mm/yyyy to dd MMMM yyyy
 * @param date
 */
export const formatLongDate = stringDate => {
  if (StringUtils.isEmpty(stringDate)) return ''
  let dateArray = stringDate.split('/')
  let day = dateArray[0] && dateArray[0].length === 1 ? `0${dateArray[0]}` : dateArray[0]
  let month = months.find(item => `${item.id}` === dateArray[1]).value
  return `${day} ${month} ${dateArray[2]}`
}

export const formatPhoneNumber = (phoneNumber) => {
  if (StringUtils.isEmpty(phoneNumber)) return ''
  return `+62${phoneNumber.substring(1)}`
}

export const formatCurrency = thousandNumberFormat('.')

export const formatLoanExpireDate = date => {
  var options = { year: '2-digit', month: '2-digit', day: '2-digit' }
  return date.toLocaleString('id', options)
}

export const maskEmailAddress = email => {
  if (StringUtils.isEmpty(email)) return ''
  let parts = email.split('@')
  if (parts.length > 1) {
    let result = parts[0]
    if (result.length === 1) {
      result = `${result}**@${parts[1]}`
    } else {
      result = `${result.substring(0, 2)}**@${parts[1]}`
    }
    return result
  }
  return email
}

export const formatSecurityPhone = (phoneNumber) => (
  (!!phoneNumber && phoneNumber.replace(/(\d{3})(\d{5})(\d{1,})/g, '$1*****$3')) || phoneNumber
)
