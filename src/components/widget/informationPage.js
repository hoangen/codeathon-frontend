import React from 'react'
import Footer from './../productInfo/footer'
import $ from 'jquery'

export default class InformationPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {height: 0}
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions () {
    const mainContentHeight = $('#header').height() + $('#mainContent').height() + $('#footer').height()
    let height = ((window.innerHeight - mainContentHeight) > 0) ? (window.innerHeight - mainContentHeight) : 0
    this.setState({height: height})
  }

  componentDidMount () {
    // waiting for the whole window rendered.
    setTimeout(() => {
      this.updateDimensions()
    }, 1000)
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render () {
    return (
      <div id='wrapper'>
        <div id='mainContent'>
          {this.props.children}
        </div>
        <Footer />
        <div className='background-footer' style={{height: `${this.state.height}px`}} />
      </div>
    )
  }
}
