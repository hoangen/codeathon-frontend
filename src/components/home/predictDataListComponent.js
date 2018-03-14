import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    let predictData = state.predictData;
    let predictDataList = predictData.dataList;
    return {
        predictDataList: predictDataList || []
    }
}

const PredictionDataList = ({predictDataList}) => {
    console.log("value" + predictDataList.length)
    return (
            <div className="row margin-bottom-10 margin-top-30">

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Transaction</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {predictDataList.length > 0 && predictDataList.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{++index}</th>
                            <td>{item.name}</td>
                            <td>{item.transaction}</td>
                            <td>{item.status ? "0" : "1"}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
    )
};

export default connect(mapStateToProps)(PredictionDataList)
