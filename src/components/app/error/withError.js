import React from 'react'
import ActionType from './../../../actions/actionType'
import ActionFactory from './../../../actions/actionFactory'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppPageURL from './../../../common/appPageURL'

export class ErrorWrapper extends React.Component {
  componentWillMount () {
    this.props.history.action !== 'PUSH' && this.props.history.push(AppPageURL.HOME)
  }

  render () {
    return this.props.component
  }
}

const mapStateToProps = ({app}) => ({
  urlToRedirect: app ? app.urlToRedirect : null
})

const mapDispatchToProps = (dispatch) => ({
  clearUrlToRedirect: () => dispatch(ActionFactory.ofType(ActionType.PAGE_REDIRECTED))
})

const ErrorWrapperConnected = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(ErrorWrapper))

export default function withError (component) {
  return <ErrorWrapperConnected component={component} />
}
