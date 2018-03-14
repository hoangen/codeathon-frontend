import React from 'react'
import {reduxForm} from 'redux-form'
import validation from '../../utils/validationUtils'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import ObjectUtils from '../../utils/objectUtils'
import {MaxLength, ReduxForm} from '../../common/constants'
import Input from '../widget/input'
import logo from '../../assets/images/icon-fitur.svg'
import '../../assets/css/review-customer-information.css'

const mapStateToProps = (state, props) => {
    return {}
}

class ModelFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        console.log('upload model-->', formData);

    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div id='stepPersonalInformation' className='step-content'>
                    <div className='container'>
                        <div className="row margin-bottom-10 margin-top-30">
                            <h1 className="align-left">Model Board</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <a href="#" class="badge badge-primary">Download Model</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <label className="gray-small-text">Please upload new model</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                            </div>
                        </div>
                        <div className='row margin-top-30'>
                            <button type='submit' className='btn btn-blue' id='nextToStepWorkInformation'>Search</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    // initCustomerSession: (reCaptchaToken) => dispatch(initCustomerSession(reCaptchaToken))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModelFormComponent))
