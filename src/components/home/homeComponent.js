import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppPageURL from '../../common/appPageURL'
import PredictFormComponent from './predictFormComponent'
import PredictDataList from './predictDataListComponent'


class HomeComponent extends React.Component {
    constructor (props) {
        super(props)
        this.submitHandle = this.submitHandle.bind(this)
    }

    submitHandle (state) {
        console.log("state" + state)
        console.log("pros" + this.props)
        this.props.history.push(AppPageURL.CUSTOMER_PROFILE)
    }

    componentDidMount () {
        // window.nextStep('stepWorkingExperience', 'stepPersonalInfo', 'step2', 'step1')
        // window.scrollTo(0, 0)
    }

    render () {
        return (
            <div id='mainContent' className='bg-rectangle'>
                <PredictFormComponent />

                <div id="mainContent" className="bg-rectangle-review">
                    <div className="review-page">
                        <div className="container">
                            <PredictDataList/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(HomeComponent))
