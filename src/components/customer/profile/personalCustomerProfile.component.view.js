import React from 'react'
import {connect} from 'react-redux'
// Get data from Reducer Store
const mapStateToProps = (state, props) => {
    let form = state.form;
    let loginForm = form.loginInformation;
    let values = loginForm && loginForm.values;

    return {
        fullName: (values && values.username) || "Hieu Ta",
        dateOfBirth: "20-Sep-1990",
        idCardNumber: "123456789",
        phoneNumber: "0909929697",
        email: "test@gmail.com",
        address: "4B Ton Duc Thang",
        city: "HCM",
        district: "1",
        ward: "12",
        sameAddress: false
    }
}

const PersonalCustomerProfile = ({fullName, dateOfBirth, idCardNumber, phoneNumber, email, address, city, district, ward, sameAddress}) => {
    return (
        <div className="row">
            <h4>Data Pribadi Anda</h4>
            <div className="col-sm-12 col-xs-12">
                <label>Full Name</label><br/>
                <div className='review-page-value'>{fullName}</div>
            </div>
            <div className="col-sm-6 col-xs-12">
                <label>Date Of Birth</label><br/>
                <div className='review-page-value'>{dateOfBirth}</div>
            </div>
            <div className="col-sm-6 col-xs-12">
                <label>Phone Number</label><br/>
                <div className='review-page-value'>{phoneNumber}</div>
            </div>
            <div className="col-sm-6 col-xs-12">
                <label>Passport ID</label><br/>
                <div className='review-page-value'>{idCardNumber}</div>
            </div>
            <div className="col-sm-6 col-xs-12">
                <label>Email</label><br/>
                <div style={{wordWrap:'break-word'}} className='review-page-value'>{email}</div>
            </div>
            {
                !sameAddress &&
                <div className="col-sm-6 col-xs-12">
                    <label>City</label><br/>
                    <div className='review-page-value'>{city}</div>
                </div>
            }
            {
                !sameAddress &&
                <div className="col-sm-6 col-xs-12">
                    <label>District</label><br/>
                    <div className='review-page-value'>{district}</div>
                </div>
            }
            {
                !sameAddress &&
                <div className="col-sm-12 col-xs-12">
                    <label>Ward</label><br/>
                    <div className='review-page-value'>{ward}</div>
                    <div className="border-bottom">&nbsp;</div>
                </div>
            }
        </div>
    )
};

export default connect(mapStateToProps)(PersonalCustomerProfile)