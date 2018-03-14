import {LoanSimulation} from "../common/constants";

export const calculateProxyExpense = (marriageStatus, numberOfDependents, declaredIncome) => {
  const dependant = numberOfDependents > 3 ? 4 : numberOfDependents
  const dependantPercent = marriageStatus === 'single' ? LoanSimulation.PERCENTAGE_SINGLE : LoanSimulation.PERCENTAGE_MARRIED
  return (dependantPercent * declaredIncome) + (dependant * LoanSimulation.DEPENDS_AMOUNT)
}

export const calculateMonthlyIncome = (declaredIncome, proxyExpense) => {
  return declaredIncome - proxyExpense
}

export const calculateFirstEligibleMonthlyInstallment = (monthlyIncome, totalInstallment) => {
  return (40 * monthlyIncome / 100) - totalInstallment
}

export const calculateEligibleMonthlyInstallment = (eligibleLoanAmount, tenure, interest) => {
  return Math.round(eligibleLoanAmount / tenure + (eligibleLoanAmount * interest * tenure) / tenure)
}

export const calculateCreditLimit = (monthlyIncome, totalInstallment, tenure, interest) => {
  let eligibleMonthlyInstallment = calculateFirstEligibleMonthlyInstallment(monthlyIncome, totalInstallment)
  return roundDown(eligibleMonthlyInstallment * tenure / (1 + (interest * tenure)))
}

export const roundDown = (number) => {
  const THOUSAND = 1000
  let multiplesNumber = THOUSAND
  while (number / multiplesNumber >= THOUSAND) {
    multiplesNumber *= THOUSAND
  }
  let roundedMultiples = Math.floor(number / multiplesNumber)
  return roundedMultiples * multiplesNumber
}

export const calculateEligibleLoanAmount = (monthlyIncome, creditLimit, maxLoanAmount) => {
  return Math.min(Math.min(creditLimit, roundDown(5 * monthlyIncome)), maxLoanAmount)
}
