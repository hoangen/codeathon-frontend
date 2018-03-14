import React from 'react'
import months from '../../assets/months.json'
import List from "./optionList/list"
import ObjectUtils from "../../utils/objectUtils"
import StringUtils from "../../utils/stringUtils"
import icon_dropdown from '../../assets/images/icon-dropdown.svg'

const MonthView = ({
                       onMonthSelected,
                       hint,
                       text,
                       modalId,
                       dataList,
                       dialogTitle
                   }) => {

    return (
        <div id="month">
            <div className="form-control">
				<span>{text
                    ? text
                    : hint}</span>
                <span className="glyphicon">
                    <img src={icon_dropdown} alt='dropdown' />
                </span>
                <button type='button' data-toggle="modal" data-target="#monthDialog"/>
            </div>

            {
                dataList !== null && dataList !== [] &&
                <div id="monthDialog" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <strong className="modal-title">{dialogTitle}</strong>
                            </div>
                            <div className="modal-body">
                                <List dataList={dataList}
                                      selectedItem={text}
                                      itemClick={(item) => onMonthSelected(item)}
                                      name={modalId}/>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        let tempValue = this.props.input.value;
        if (!StringUtils.isEmpty(tempValue)) {
            let splitter = tempValue.split('/');

            this.state = {
                day: splitter[0],
                month: months.find((elem) => {return elem.id.toString() === splitter[1]}),
                year: splitter[2]
            }
        } else {
            this.state = {
                day: '',
                month: '',
                year: ''
            }
        }
    }

    render() {
        const updateCalendar = (day, month, year) => {
            this.setState({
                day: day,
                month: month,
                year: year
            })

            let monthId = ''
            if (!ObjectUtils.isEmpty(month && month.id)) {
                monthId = month.id
            }
            return day + '/' + monthId + '/' + year
        }
        let input = this.props.input;
        let touched = this.props.meta.touched;
        let error = this.props.meta.error;
        let hasError = touched && error;
        return (
            <div className="form-group">
                <label htmlFor="day" className="gray-small-text">{this.props.label}</label><br/>
                <div className={`datetime${hasError && ' has-error'}`}>
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Tanggal" id="day"
                        value={this.state.day}
                        maxLength="2" onChange={event => {
                            if(StringUtils.isEmpty(event.target.value) || event.target.value.match('^[0-9]+$')) {
                                input.onChange(updateCalendar(event.target.value, this.state.month, this.state.year))
                            }
                    }
                    }/>
                    <MonthView
                        dataList={months}
                        dialogTitle="Pilih Bulan"
                        text={this.state.month && this.state.month.value}
                        onMonthSelected={month => {
                            input.onChange(updateCalendar(this.state.day, month, this.state.year))
                        }
                        }
                        modalId="month"
                        hint="Pilih Bulan"
                    />
                    <input type="tel" className="form-control" placeholder="Tahun"
                           id="year" maxLength="4"
                           value={this.state.year}
                           onChange={event => {
                               if(StringUtils.isEmpty(event.target.value) || event.target.value.match('^[0-9]+$')) {
                                   input.onChange(updateCalendar(this.state.day, this.state.month, event.target.value))
                               }
                           }}
                           onBlur={event => {
                               input.onBlur(updateCalendar(this.state.day, this.state.month, event.target.value))
                           }
                           }/>

                </div>
                {
                    hasError &&
                    <div className="has-error">
                        <span className="help-block with-errors">{error}</span>
                    </div>
                }
            </div>
        )
    }
}

export default Calendar