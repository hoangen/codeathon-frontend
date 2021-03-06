import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router'
import Header from './app.header.component'
import AppPageURL from '../../common/appPageURL'
import withTracker from './withTracker'
import asyncComponent from '../common/async.component'
import withPageTimeLogger from "./withPageTimeLogger"
import LoginPage from '../login/loginPage'
import HomeComponent from '../home/homeComponent'
const AsyncDashboardPage = asyncComponent(() => import('../dashboard/dashboardComponent'))


class App extends React.Component {
  constructor() {
    super()
  }

    //load call API REST when first time go to home page
  componentDidMount() {
      const {getLoanConfig} = this.props;
      // getLoanConfig()
  }

  componentWillReceiveProps(nextprops) {
  }

  render() {
    return (
      <div id="wrapper" className="App">
        <Header/>
        <Switch>
            <Route exact
                   path={AppPageURL.HOME}
                   component={
                       withPageTimeLogger(
                           HomeComponent,
                           'homePage')
                   }
            />

            <Route exact
               path={AppPageURL.LOGIN}
               component={
                   withPageTimeLogger(
                       LoginPage,
                       'loginPage')
               }
            />

            <Route exact
                   path={AppPageURL.DASHBOARD}
                   component={
                       withTracker(
                           withPageTimeLogger(
                               AsyncDashboardPage,
                               'dashboardPage')
                       )
                   }
            />

        </Switch>
      </div>
    )
  }
}

//map data from state(load from file, init data) to Properties
const mapStateToProps = state => {
    console.log("state" + JSON.stringify(state))
  return {
  }
}

//map data from response API to Properties
const mapDispatchToProps = (dispatch) => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(App))
