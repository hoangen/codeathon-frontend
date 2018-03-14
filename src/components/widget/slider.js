import React from 'react'
import {formatCurrency} from '../../utils/formatUtils'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import '../../assets/css/react-custom-style-slider.css'

export default class LoanSlider extends React.Component {

  render() {
    const {amount, min, max, step, hasError, errorMessage, isEnableLoanSimulation} = this.props
    return (
      <div className='slide-value has-error'>
        <label className={!isEnableLoanSimulation && 'disable-loan-simulation'}>Jumlah Pinjaman</label>
        <span className={`${hasError && isEnableLoanSimulation && 'help-block with-errors'} ${!isEnableLoanSimulation && 'disable-loan-simulation'}`}>
          {`Rp${formatCurrency(amount)}`}
        </span>
        <div className={`slider ${!isEnableLoanSimulation && 'disable-loan-simulation'}`}>
          <Slider
            min={min}
            max={max}
            step={step}
            value={amount}
            onChange={value => this.props.onChange && this.props.onChange(value)}
          />
        </div>
        <div className={`min-value ${!isEnableLoanSimulation && 'disable-loan-simulation'}`}>{formatCurrency(min)}</div>
        <div className={`max-value ${!isEnableLoanSimulation && 'disable-loan-simulation'}`}>{formatCurrency(max)}</div>
        <div style={{marginTop: 14}}>
          {(<div
            className='help-block with-errors error-message-small'>
            {hasError ? `${errorMessage}` : '\xa0'}
          </div>)}
        </div>
      </div>
    )
  }
}
