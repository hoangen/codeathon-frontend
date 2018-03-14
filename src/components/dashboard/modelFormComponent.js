import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../assets/css/review-customer-information.css'
import ActionFactory from "../../actions/actionFactory";
import ActionType from "../../actions/actionType";
import download from '../../assets/images/download.jpeg'
import StatusComponent from './statusComponent'

const mapStateToProps = (state, props) => {
    return {
    }
}

class ModelFormComponent extends React.Component {

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
            this.props.uploadModelFile(formData);
        }
        return;
    }

    render () {
        return (
            <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <div id='stepPersonalInformation' className='step-content'>
                    <div className='container'>
                        <StatusComponent/>
                        <div className="row margin-bottom-10">
                            <h1 className="align-center">Model Management</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label className="gray-small-text" style={{marginBottom: '10px'}}>Please upload new model</label>
                                    <input type="file" className="form-control-file" name="file" id="file" required/>
                                </div>
                                <div className="form-group">
                                    <div className='row margin-top-30'>
                                        <button type='submit' className='btn btn-blue' id='nextToStepWorkInformation'>Upload New Model</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label className="gray-small-text" >Please download model</label>
                                </div>
                                <div className="form-group">
                                    <a href="http://13.55.86.51:5001/model/download/model.zip" download>
                                        <img alt="W3Schools" src={download} width="100" height="100"/>
                                    </a>
                                </div>
                            </div>
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
