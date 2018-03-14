import React from 'react'
import {connect} from 'react-redux'
import {MarriageStatus} from "../../../common/constants"
import logo from '../../../assets/images/icon-fitur.svg'

const mapStateToProps = (state, props) => {
    let form = state.form;
    console.log("aaa" + form);
    let loginForm = form.loginInformation;
    let values = loginForm && loginForm.values;
    let username = (values && values.username)|| "Hieu Ta";
    let marriageStatus = MarriageStatus.MARRIED;
    let numberOfKid = 1;

    return {
        marriageStatus: MarriageStatus.MARRIED,
        numberOfKid: numberOfKid,
        isHasFamily: marriageStatus === MarriageStatus.MARRIED,
        userName: username
    }
}

const FamilyCustomerProfile = ({userName, marriageStatus, numberOfKid, isHasFamily}) => {
    return (
        <div className="row margin-bottom-10 margin-top-30">
            <h1 className="align-left"><img src={logo} alt="Ceritakan Tentang Diri Anda"/>{userName}'s Profile</h1>
            <div className="col-xs-6">
                <label>Status</label><br/>
                <div className='review-page-value'>{marriageStatus}</div>
            </div>
            <div className="col-xs-6">
                <label>Number children</label><br/>
                <div className='review-page-value'>{numberOfKid}</div>
            </div>
            {
                isHasFamily && (
                    <div className="col-sm-12 col-xs-12">
                        <label>Address department</label><br/>
                        <div className='review-page-value'>Need to update</div>
                    </div>
                )
            }
        </div>
    )
};

export default connect(mapStateToProps)(FamilyCustomerProfile)
