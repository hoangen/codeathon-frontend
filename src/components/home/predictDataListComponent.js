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
    debugger
    return (
            <div className="row margin-bottom-10 margin-top-30">
                <table className="table table-striped">
                    <thead>
                    {predictDataList.length > 0 &&
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Age</th>
                        <th scope="col">Occupation</th>
                        <th scope="col">Fraud</th>
                    </tr>
                    }
                    </thead>
                    <tbody>
                    {predictDataList.length > 0 && predictDataList.map((item, index) => (
                        <tr key={index} style={{color : item.fraud == 1 && 'red'}}>
                            <th scope="row">{++index}</th>
                            <td>{item.age}</td>
                            <td>{item.occupation}</td>
                            <td>{item.fraud}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
    )
};

export default connect(mapStateToProps)(PredictionDataList)
