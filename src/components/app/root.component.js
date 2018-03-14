import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import ActionFactory from '../../actions/actionFactory'
import ActionType from '../../actions/actionType'

import App from './app.component'
import AppPageURL from '../../common/appPageURL'
import withError from './error/withError'
import asyncComponent from '../common/async.component'
import InternalServerError from './error/internalServerError.component'
import PageNotFound from './error/pageNotFound.component'

const AsyncUnauthorized = asyncComponent(() => import('./error/unauthorized.component'))
const AsyncForbidden = asyncComponent(() => import('./error/forbidden.component'))
const AsyncAutomationSupportingHome = asyncComponent(() => import('../auto/automation-supporting-home'))

class Root extends React.Component {
  componentDidMount () {
    this.redirect()
  }

  componentDidUpdate () {
    this.redirect()
  }

  redirect () {
    const { urlToRedirect, clearUrlToRedirect, history } = this.props
    if (urlToRedirect) {
      history.push(urlToRedirect)
      clearUrlToRedirect()
    }
  }

  render () {
      const {history: {}} = this.props
      return (
          <div>
              <Switch>
                  <Route path={AppPageURL.HOME} render={() => <App />} />
                  <Route exact path={AppPageURL.UNAUTHORIZED} render={() => withError(<AsyncUnauthorized/>)} />
                  <Route exact path={AppPageURL.INTERNAL_SERVER_ERROR} render={() => withError(<InternalServerError/>)} />
                  <Route exact path={AppPageURL.FORBIDDEN} render={() => withError(<AsyncForbidden/>)} />
                  <Route exact path={AppPageURL.PAGE_NOT_FOUND} render={() => withError(<PageNotFound/>)} />
                  <Route exact path={AppPageURL.AUTOMATION_SUPPORTING} component={AsyncAutomationSupportingHome} />
              </Switch>
          </div>
      )
  }
}

const mapStateToProps = ({app}) => ({
  urlToRedirect: app ? app.urlToRedirect : null
})

const mapDispatchToProps = (dispatch) => ({
  clearUrlToRedirect: () => dispatch(ActionFactory.ofType(ActionType.PAGE_REDIRECTED))
})

export default Root = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(Root))
