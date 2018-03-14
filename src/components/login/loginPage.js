import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppPageURL from '../../common/appPageURL'
import LoginFormView from './loginFormView'

class LoginPage extends React.Component {
    constructor (props) {
        super(props)
        this.submitHandle = this.submitHandle.bind(this)
    }

    submitHandle (state) {
        console.log("state" + state)
        console.log("pros" + this.props)
            this.props.history.push(AppPageURL.DASHBOARD)
    }

    render () {
        return (
            <div id='mainContent' className='bg-rectangle'>
                <LoginFormView onSubmit={this.submitHandle} />
            </div>
        )
    }
}

export default withRouter(connect()(LoginPage))
