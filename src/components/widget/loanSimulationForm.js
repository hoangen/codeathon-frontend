import React from 'react'

import LoanSlider from './slider'
import CircleOption from './circleOption'
import InterestInstallment from './interestInstallment'
import {Field} from 'redux-form'

const renderSlider = field => (
  <LoanSlider
    {...field}
    onChange={param => field.input.onChange(param)}
  />
)

const renderCircleOption = field => (
  <CircleOption
    {...field}
    value={field.input.value}
    error={field.meta.touched && field.meta.error}
    onChange={param => field.input.onChange(param)}
  />
)

export class LoanSimulation extends React.Component {

  render () {
    const { haveErrorLoanAmount, interestInstallment, amount, tenure, minAmount, maxAmount, stepAmount, minTenure,
      maxTenure, maxEligible, onChangeTenure, onChangeAmount, errorMessage, isEnableLoanSimulation, displayInterestInstallment } = this.props
    return (
      <div className='calculator-box'>
        <h3 className={`align-center ${!isEnableLoanSimulation && 'disable-loan-simulation'}`}>Rincian Pengajuan</h3>
        <div className='slider-container'>
          <Field
            name='amount'
            className='slide-value'
            component={renderSlider}
            min={minAmount}
            max={maxAmount}
            amount={amount}
            onChange={(event, newValue, previousValue)=>onChangeAmount && onChangeAmount(newValue)}
            maxEligible={maxEligible}
            hasError={haveErrorLoanAmount || amount > maxEligible}
            step={stepAmount}
            isEnableLoanSimulation={isEnableLoanSimulation}
            errorMessage={errorMessage}/>
        </div>
        <Field
          name='tenure'
          component={renderCircleOption}
          minTenure={minTenure}
          maxTenure={maxTenure}
          initialTenure={tenure}
          isEnableLoanSimulation={isEnableLoanSimulation}
          onChange={(event, newValue, previousValue) => onChangeTenure && onChangeTenure(newValue)} />
        <InterestInstallment value={interestInstallment} isEnableLoanSimulation={isEnableLoanSimulation} displayInterestInstallment={displayInterestInstallment}/>
      </div>
    )
  }
}

export default LoanSimulation
