import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FamilyCustomerProfile from './familycustomerprofile.component.view'
import '../../../assets/css/review-customer-information.css'
import PersonalCustomerProfile from './personalCustomerProfile.component.view'
import InitCustomerSession from './initCustomerProfile.component.view'

class CustomerProfileComponent extends React.Component {
    constructor () {
        super()
    }

    onSubmitChange(isClickedSubmit) {
        console.log("onSubmitChange -------");
        this.props.submitLoan({reCaptchaToken: 'sasasasasasa'})
    }

    render () {
        return (
            <div id="mainContent" className="bg-rectangle-review">
                <div className="review-page">
                    <div className="container">
                        <FamilyCustomerProfile/>
                        <PersonalCustomerProfile/>
                        <InitCustomerSession/>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(connect()(CustomerProfileComponent))
