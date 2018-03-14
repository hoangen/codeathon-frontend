import CustomerService from '../services/customer.service'
import {formatPhoneNumber} from '../utils/formatUtils'
import {MarriageStatus} from './../common/constants'
import {createCustomer, createCustomerSuccess, createCustomerFail} from '../actions/actionCreator'
import Rx from 'rxjs/Rx'

const submitLoanEpic = (action$, store) =>
    action$.ofType(createCustomer().type)
        .mergeMap(({payload: {reCaptchaToken}}) => {
          const customerInfo = createLoanSubmissionRequestBody(store.getState())

          return new CustomerService(store.dispatch)
                  .createCustomer(reCaptchaToken, customerInfo)
                  .map(({data, errors, success}) => success
                      ? createCustomerSuccess(data)
                      : createCustomerFail(errors[0])
                  )
                  .catch(throwable => Rx.Observable.of(createCustomerFail(throwable)))
        })

const createLoanSubmissionRequestBody = ({form, getConfigurationsAPIResponse}) => {
  const personalInfo = form.customerPersonalInformation.values
  const workingInfo = form.customerWorkingInformation.values
  const financialInfo = form.customerFinancialInformation.values
  const configurations = getConfigurationsAPIResponse && getConfigurationsAPIResponse.configurations
  const maritalStatus = (financialInfo.marriageStatus === MarriageStatus.MARRIED) ? 'K' : 'B'
  const numberOfChildren = financialInfo.numberOfKids || 0
  return {
    'customer': {
      'title': null,
      'name': personalInfo.fullName,
      'dateOfBirth': personalInfo.birthday.replace(/\//g, '-'),
      'gender': null,
      'maritalStatus': maritalStatus,
      'phoneNumber': formatPhoneNumber(personalInfo.phoneNumber),
      'email': personalInfo.email,
      'motherMaidenName': null,
      'numberOfChildren': numberOfChildren,
      'nik': personalInfo.idNumber,
      'address1': personalInfo.address,
      'address2': null,
      'town': personalInfo.cityCode,
      'district': personalInfo.district,
      'village': personalInfo.ward,
      'ownerStatus': 'OWNER',
      'placeOfBirth': null,
      'sameWithKtpAddress': personalInfo.sameAddress
    },
    'emergencyContact': {},
    'customerOption': {},
    'loanInformation': {
      'purposeName': financialInfo.loanPurpose.key,
      'amount': financialInfo.amount,
      'installmentIndicator': financialInfo.haveMonthlyInstallment,
      'interest': configurations.interestRate,
      'tenure': financialInfo.tenure,
      'installmentAmount': financialInfo.interestInstallment,
      'otherInstallmentAmount': financialInfo.haveMonthlyInstallment ? Number.parseInt(financialInfo.totalInstallment, 10) : 0
    },
    'employment': {
      'employerName': workingInfo.companyName,
      'occupation': workingInfo.occupationCode,
      'jobTitle': workingInfo.jobTitleCode,
      'lineOfBusinessGroup': workingInfo.lineOfBusinessGroupCode,
      'lineOfBusiness': workingInfo.linesOfBusinessCode,
      'monthlyIncome': financialInfo.declaredIncome
    }
  }
}

export default submitLoanEpic
