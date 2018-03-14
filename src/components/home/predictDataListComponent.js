import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    let predictData = state.predictData;
    let predictDataList = predictData.dataList;
    let predictDataFirst = predictDataList && predictDataList.length > 0 ? predictDataList[0] : {}
    let predictKeyList  = [];
    for (var key in predictDataFirst) {
        if (predictDataFirst.hasOwnProperty(key)) {
            predictKeyList.push(key);
        }
    };
    return {
        predictKeyList : predictKeyList,
        predictDataList: predictDataList || []
    }
}

const PredictionDataList = ({predictKeyList, predictDataList}) => {
    return (
            <div className="row margin-bottom-10 margin-top-30" style={{overflowX: 'scroll'}}>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        {predictKeyList.length > 0 && predictKeyList.map((key) => {
                            return <th scope="col">{key}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {predictDataList.length > 0 && predictDataList.map((item, index) => (
                        <tr key={index} style={{color : item.fraud == 1 && 'red'}}>
                            {predictKeyList.map((key) => {
                                return <td>{item[key]}</td>
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
    )
};

export default connect(mapStateToProps)(PredictionDataList)
