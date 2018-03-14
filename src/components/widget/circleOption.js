import React from 'react'
import PropTypes from 'prop-types'

export default class CircleOption extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      minTenureSelected: props.minTenure === props.value,
      maxTenureSelected: props.maxTenure === props.value
    }
  }

  onValueChange (e, value) {
    e && e.preventDefault()
    this.setState({
      minTenureSelected: value === this.props.minTenure,
      maxTenureSelected: value === this.props.maxTenure
    })
    this.props.onChange && value && this.props.onChange(value)
  }

  componentDidMount () {
    this.onValueChange(undefined, this.props.initialTenure)
  }

  componentWillReceiveProps (nextProps) {
    nextProps.initialTenure !== this.props.initialTenure && this.onValueChange(undefined, nextProps.initialTenure)
  }

  render () {
    const { minTenure, maxTenure } = this.props
    const { minTenureSelected, maxTenureSelected } = this.state

    return (
      <div className={`tenor ${!this.props.isEnableLoanSimulation && 'disable-loan-simulation'}`}>
        <label>Tenor (bulan)</label>
        <br />
        <a
          href='/'
          className={`circle-btn margin-right-30 ${minTenureSelected && 'active'}`}
          onClick={e => this.onValueChange(e, minTenure)}>
          {minTenure}
        </a>
        <a
          href='/'
          className={`circle-btn ${maxTenureSelected && 'active'}`}
          onClick={e => this.onValueChange(e, maxTenure)}>
          {maxTenure}
        </a>
      </div>
    )
  }
}

CircleOption.prototypes = {
  minTenure: PropTypes.number.isRequired,
  maxTenure: PropTypes.number.isRequired,
  onChange: PropTypes.func
}
