import React from 'react'
import {connect} from 'react-redux'

import ActionFactory from './../../actions/actionFactory'
import ActionType from './../../actions/actionType'

export class AutomationSupportingHome extends React.Component {
  componentDidMount () {
    this.props.dispatch(ActionFactory.create(ActionType.GET_LOAN_CONFIG_AUTO))
  }

  componentWillReceiveProps ({clientRecaptchaGoogle}) {
    const propsClientRecaptchaGoogle = this.props.apiConfig.configurations.clientRecaptchaGoogle
    clientRecaptchaGoogle !== propsClientRecaptchaGoogle &&
      window.location.assign(`${window.location.protocol}//${window.location.host}`)
  }

  render () {
    return (
      <div>Automation get config</div>
    )
  }
}

export default connect(
  ({getConfigurationsAPIResponse}) => ({apiConfig: getConfigurationsAPIResponse})
)(AutomationSupportingHome)
