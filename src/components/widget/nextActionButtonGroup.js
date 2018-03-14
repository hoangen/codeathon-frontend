import React from 'react'

export default function NextActionButtonGroup ({ className, onNextClick, onBackClick }) {
  return (
    <div className={className}>
      <span
        className='btn btn-blue'
        onClick={onNextClick}>LANJUT</span>
      <br />
      <span
        className='btn btn-noborder margin-top-15'
        onClick={onBackClick} >KEMBALI</span>
    </div>
  )
}
