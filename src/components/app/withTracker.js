import React, { Component } from 'react'
import GoogleAnalytics from 'react-ga'
import AppPageURL from '../../common/appPageURL'

export const GAScreenName = {
  HOME: 'Home Page',
  LOAN_SIMULATION: 'Loan Simulation',
  PERSONAL_INFO: 'Personal Info',
  WORKING_INFO: 'Working Info',
  REVIEW_PAGE: 'Review Page'
}

export const mapTrackedPageToScreenName = page => {
  switch (page) {
    case AppPageURL.HOME:
      return GAScreenName.HOME
    case AppPageURL.CUSTOMER_INFORMATION_FINANCIAL_INFO:
      return GAScreenName.LOAN_SIMULATION
    case AppPageURL.CUSTOMER_INFORMATION_PERSONAL_INFO:
      return GAScreenName.PERSONAL_INFO
    case AppPageURL.CUSTOMER_INFORMATION_WORKING_INFO:
      return GAScreenName.WORKING_INFO
    case AppPageURL.CUSTOMER_INFORMATION_REVIEW:
      return GAScreenName.REVIEW_PAGE
    default:
      return GAScreenName.HOME
  }
}

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    let screen = mapTrackedPageToScreenName(page)
    GoogleAnalytics.set({
      page: page,
      title: screen,
      ...options,
    })
    GoogleAnalytics.pageview(page)
  }

  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.location.pathname
      trackPage(page)
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname
      const nextPage = nextProps.location.pathname
      if (currentPage !== nextPage) {
        trackPage(nextPage)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return HOC
}

export default withTracker