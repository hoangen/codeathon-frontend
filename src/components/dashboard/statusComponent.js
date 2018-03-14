import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    let uploadModelFile = state.uploadModelFile
    return {
        statusUploadSuccess: uploadModelFile.status || false
    }
}

const StatusComponent = ({statusUploadSuccess}) => {
    return (
        <div>
        {statusUploadSuccess &&
            <div className="alert alert-primary" role="alert">
                The new model file uploaded success
            </div>
        }
        </div>
    )
};

export default connect(mapStateToProps)(StatusComponent)
