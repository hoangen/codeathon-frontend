import React from 'react'
import {connect} from 'react-redux'
import {initCustomerSession} from '../../../actions/actionCreator'
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, props) => {
    let form = state.form;
    console.log("aaa" + form);
    let loginForm = form.loginInformation;
    let values = loginForm && loginForm.values;
    let username = (values && values.username)|| "Hieu Ta";
    let numberOfKid = 1;

    return {
        marriageStatus: "AAA",
        numberOfKid: numberOfKid,
        isHasFamily: true,
        userName: username
    }
}

class InitCustomerSession extends React.Component {
    constructor (props) {
        super(props)
    }

    onSubmitChange(isClickedSubmit) {
        console.log("onSubmitChange -------");
        this.props.initCustomerSession({reCaptchaToken: 'sasasasasasa'})
    }

    render () {
        return (
            <div className="row margin-bottom-10 margin-top-30">
                <div
                    className='align-center'
                    style={{width: '100%', float: 'left'}}>
                    <button
                        type='button'
                        className='btn btn-blue'
                        onClick={() => this.onSubmitChange(true)}>
                        SUBMIT
                    </button>
                    <br />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    initCustomerSession: (reCaptchaToken) => dispatch(initCustomerSession(reCaptchaToken))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InitCustomerSession))
