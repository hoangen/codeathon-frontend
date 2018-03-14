import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {logTime} from '../../actions/actionCreator'

export class LogComponent extends React.Component {
  componentDidMount () {
    this.startTime = Date.now()
  }

  componentWillUnmount () {
    const duration = Date.now() - this.startTime
    const {logDuration, pageName} = this.props
    logDuration({pageName, duration})
  }

  render () {
    return (
      <this.props.component />
    )
  }
}

const mapStateToProps = (state, props) => ({
  ...props
})

const mapDispatchToProps = (dispatch) => ({
  logDuration: ({pageName, duration}) => dispatch(logTime({pageName, duration}))
})

const LogComponentConnect = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LogComponent)
)

const withPageTimeLogger = (wrapperConponent, pageName) => () => <LogComponentConnect component={wrapperConponent} pageName={pageName} />

export default withPageTimeLogger
