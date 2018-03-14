
export const calculateLoanExpireDate = (decisionDate, validityPeriod) => {
    return new Date(decisionDate + validityPeriod * 86400 * 1000)
}