import validation from "../../utils/validationUtils"
import InputTextArea from "./inputTextArea"
import OptionList from "./optionList/optionList"
import Input from "./input"
import {MaxLength} from "../../common/constants"
import React from "react"

const AddressView = ({
                        isDisplay, cities,
                        onCitySelected,
                        citySelected,
                        address,
                        district,
                        ward
                      }) => {
  return isDisplay && <div className="row">
    <InputTextArea
      className='col-sm-12 col-xs-12 form-group field-style'
      style={{marginBottom: 15}}
      name='address'
      id='address'
      label='Alamat'
      value={address}
      maxLength={MaxLength.INPUT_ADDRESS}
      inputId='address'
      validate={value => validation.customerPersonalInformation.addressValidation(value, MaxLength.INPUT_ADDRESS)}
      type='text'/>
    <OptionList
      dialogTitle='Pilih Kota'
      dataList={cities}
      modalId='city'
      text={citySelected}
      hint='Pilih kota'
      itemSelected={selectedCity => onCitySelected(selectedCity)}
      label='Kota'
      validate={validation.customerPersonalInformation.cityValidation}
      className='col-sm-12 col-xs-12 form-group'/>
    <Input
      className='col-sm-6 col-xs-12 form-group field-style'
      id='district'
      label='Kecamatan'
      value={district}
      maxLength={MaxLength.INPUT_DISTRICT}
      validate={validation.customerPersonalInformation.districtValidation}
      type='text'/>
    <Input
      className='col-sm-6 col-xs-12 form-group field-style margin-top-40-mobile'
      id='ward'
      label='Kelurahan'
      value={ward}
      maxLength={MaxLength.INPUT_WARD}
      validate={validation.customerPersonalInformation.wardValidation}
      type='text'/>
  </div>
}

export default AddressView