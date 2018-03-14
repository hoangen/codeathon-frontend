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

class PredictFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        var formData = new FormData();
        formData.append('file', e.target.file);
        formData.append('name', "aaaa");

        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div id='stepPersonalInformation' className='step-content'>
                    <div className='container'>
                        <div className="row margin-bottom-10 margin-top-30">
                            <h1 className="align-left"><img src={logo} alt="Predict Search"/>Predict Search</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xs-12 margin-bottom-30">
                                <label className="gray-small-text margin-bottom-10">Please update file data searching</label>
                                <input type="file" class="form-control-file" name="file" id="file"/>
                            </div>
                        </div>
                        <div className='row'>
                            <button type='submit' className='btn btn-blue'>Search</button>
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

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PredictFormComponent))

export default withRouter(connect(mapStateToProps,
    mapDispatchToProps)(reduxForm({
    form: ReduxForm.FORM_PREDICT_SEARCH
})(PredictFormComponent)))
