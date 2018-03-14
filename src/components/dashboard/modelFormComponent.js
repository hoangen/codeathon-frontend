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
import ActionFactory from "../../actions/actionFactory";
import ActionType from "../../actions/actionType";

const mapStateToProps = (state, props) => {
    return {}
}

class ModelFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        var formData = new FormData();
        var file = document.getElementById("file").files[0];
        // formData.append('file', e.target.file);
        formData.append('file', file);
        // formData.append('file', new Blob(['test payload'], { type: 'text/csv' }));


        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]);
        // }
        this.props.uploadModelFile(formData);

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
                                <a href="#" className="badge badge-primary">Download Model</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <label className="gray-small-text">Please upload new model</label>
                                <input type="file" className="form-control-file" name="file" id="file"/>
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


const mapDispatchToProps = (dispatch) => {
    return {
        uploadModelFile: (formData) => dispatch(ActionFactory.create(ActionType.UPLOAD_MODEL_FILE, formData))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModelFormComponent))
