import validation from "../../utils/validationUtils"
import {MaxLength} from "../../common/constants"
import Input from "./input"
import OptionList from "./optionList/optionList"
import React from "react"

const EmergencyContactView = ({relationships, relationshipSelected, onSelectRelationship}) => {
  return (<div className="row">
    <h3 className="col-sm-12 col-xs-12 margin-bottom-10">Kontak darurat</h3>
    <Input
      className='col-sm-6 col-xs-12 form-group field-style margin-bottom-30'
      id='emergencyFullName'
      label='Nama Lengkap'
      maxLength={MaxLength.INPUT_FULL_NAME}
      validate={validation.customerPersonalInformation.emergencyContactNameValidation}
      type='text'/>
    <div className="col-sm-6 col-xs-12">
      <div className='form-group field-style'>
        <Input
          id='emergencyPhoneNumber'
          label='Nomor Ponsel'
          caption='Contoh 0819878910'
          maxLength={MaxLength.INPUT_PHONE_NUMBER}
          validate={validation.customerPersonalInformation.emergencyPhoneNumberValidation}
          type='tel'/>
      </div>
    </div>
    <OptionList
      dialogTitle='Pilih Hubungan'
      dataList={relationships}
      modalId='hubungan'
      text={(relationshipSelected && relationshipSelected.value) || ''}
      hint='Pilih Hubungan'
      itemSelected={selectedRelationship => onSelectRelationship(selectedRelationship)}
      label='Hubungan'
      validate={validation.customerPersonalInformation.relationshipValidation}
      className='col-sm-12 col-xs-12 form-group'/>
  </div>)
}

export default EmergencyContactView