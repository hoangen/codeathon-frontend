import React from 'react'
import {reduxForm} from 'redux-form'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {MaxLength, ReduxForm} from '../../common/constants'
import logo from '../../assets/images/icon-fitur.svg'
import '../../assets/css/review-customer-information.css'
import ActionFactory from "../../actions/actionFactory";
import ActionType from "../../actions/actionType";

const mapStateToProps = (state, props) => {
    return {}
}

class PredictFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData();
        var file = document.getElementById("file").files[0];
        if(file) {
            formData.append('file', file);
            this.props.callPredictSearch(formData);
        }
        return;
    }

    render () {
        return (
            <form  encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <div id='stepPersonalInformation' className='step-content'>
                    <div className='container'>
                        <div className="row margin-bottom-10 margin-top-30">
                            <h1 className="align-left"><img src={logo} alt="Predict Search"/>Predict Search</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xs-12 margin-bottom-30">
                                <label className="gray-small-text margin-bottom-10">Please update file data searching</label>
                                <input type="file" className="form-control-file" name="file" id="file" required/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        callPredictSearch: (formData) => dispatch(ActionFactory.create(ActionType.GET_PREDICT_DATA_LIST, formData))
    }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PredictFormComponent))

export default withRouter(connect(mapStateToProps,
    mapDispatchToProps)(reduxForm({
    form: ReduxForm.FORM_PREDICT_SEARCH
})(PredictFormComponent)))


