import React from 'react'
import Modal from 'react-modal'
import iconLoading from '../../assets/images/loading_nobg.gif'

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  content: {
    width: '75%',
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    transform :'translate(-50%, -50%)',
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#231F20',
    fontSize: '20px'
  }
};

export default (props) => (
  <Modal
    {...props}
    style={customStyles}>
    <div className='align-center'>
      <img src={iconLoading} alt='loading' className='loading' />
      <div>
        <span className='loading-text'>Mohon tunggu sebentar</span>
      </div>
    </div>
  </Modal>
)
