import React from 'react'
import NumberFormat from 'react-number-format'

const CurrencyInput = ({maxLength, onChange, onBlur, className, label, value, error}) => (
  <div className={`form-group ${error && 'has-error has-danger'} ${className}`}>
    <label htmlFor='earningPerMonth' className='gray-small-text'>{label}</label>
    <NumberFormat className='form-control input-with-unit'
      decimalScale={0}
      thousandSeparator={'.'}
      decimalSeparator={','}
      value={value}
      type="tel"
      onValueChange={({value}) => onChange(value)}
      onBlur={({value}) => onBlur(value)}
      isAllowed={({value}) => isAllowMaxLength(maxLength, value)}
    />
    <span className='unit'>Rp</span>
    {error && <div style={{lineHeight: '12px', paddingTop: 5}} className='help-block with-errors'>{error}</div>}
  </div>
)

const isAllowMaxLength = (maxLength, value) => maxLength && maxLength > 0 && value.length <= maxLength && Number(value) >= 0

export default CurrencyInput
