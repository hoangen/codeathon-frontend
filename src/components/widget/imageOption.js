import React from 'react'
import iconChecked from '../../assets/images/icon-done.svg'

const ImageOption = ({selected, option, itemClick}) => (
  <a>
    <input type='radio' name='loan-destination' onClick={e => itemClick && itemClick(option)} checked={selected}/>
    <span className='image'>
      <img src={require(`../../assets/images/icon-${option.value.toLowerCase()}.svg`)} alt={option.value}/>
      {
        selected && <img src={iconChecked} className='icon-checked' alt='icon-checked'/>
      }
    </span><br />
    <span>{option.value}</span>
  </a>
)

export default ImageOption
