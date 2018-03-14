import React from 'react'
import List from './list'
import OptionInput from './optionInput'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'
import StringUtils from '../../../utils/stringUtils'

class OptionListView extends React.Component {

  selectedItem (item) {
    if (this.props.itemSelected) {
      this.props.itemSelected(item)
    }
    this.props.input.onBlur((this.props.isFullItem && this.props.isFullItem === true && item) || item.value)
  }

  render () {
    const modalId = this.props.modalId
            ? this.props.modalId
            : `modalId${this.props.label}`
    const enable = StringUtils.isEmpty(this.props.enable) || this.props.enable === 'enable' || this.props.enable === 'undefined'
    return (
      <div>
        <OptionInput {...this.props} id={modalId} label={this.props.label} text={this.props.text}
          enable={enable} />
        {
          this.props.dataList !== null && this.props.dataList !== [] &&
          <div id={modalId} className='modal fade' role='dialog'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <button type='button' className='close' data-dismiss='modal'>&times;</button>
                  <strong className='modal-title'>{this.props.dialogTitle}</strong>
                </div>
                <div className='modal-body'>
                  <List dataList={this.props.dataList}
                    selectedItem={this.props.text}
                    itemClick={(item) => this.selectedItem(item)}
                    name={modalId} />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

const OptionList = props => (
  <Field
    {...props}
    name={props.modalId}
    component={OptionListView}
    />
)

OptionList.propTypes = {
  label: PropTypes.string,
  dialogTitle: PropTypes.string,
  hint: PropTypes.string,
  text: PropTypes.string,
  dataList: PropTypes.array.isRequired,
  modalId: PropTypes.string,
  enable: PropTypes.string,
  itemSelected: PropTypes.func,
  isFullItem: PropTypes.bool
}

export default OptionList
