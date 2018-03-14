import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppPageURL from '../../common/appPageURL'
import ModelFormComponent from './modelFormComponent'

class DashboardComponent extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div id='mainContent' className='bg-rectangle'>

                <ModelFormComponent/>
            </div>
        )
    }
}

export default withRouter(connect()(DashboardComponent))
