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

    function convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    function downloadCSV(args) {
        debugger
        var data, filename, link;

        var csv = convertArrayOfObjectsToCSV({
            data: args.stockData
        });
        if (csv == null) return;

        filename = args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }

    return (
            <div className="row margin-bottom-10 margin-top-20" style={{overflow: 'auto', maxHeight: '600px'}}>
                {predictKeyList.length > 0 &&
                    <a href='#' style={{paddingBottom: '10px'}} onClick={() => {
                        downloadCSV({filename: "predict-search-data.csv", stockData: predictDataList})
                    }}>Download Predict Data CSV</a>
                }
                <table className="table table-striped" style={{marginTop: '10px'}}>
                    <thead>
                    <tr>
                        {predictKeyList.length > 0 && predictKeyList.map((key, index) => {
                            return <th scope="col" key={index}>{key}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {predictDataList.length > 0 && predictDataList.map((item, index) => (
                        <tr key={index} style={{color : item.Suspicious >= 0.8 && 'red'}}>
                            {predictKeyList.map((key) => {
                                return <td key={key + index}>{item[key]}</td>
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
    )
};

export default connect(mapStateToProps)(PredictionDataList)
