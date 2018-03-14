import React from 'react'
import icon_error from '../../../assets/images/icon-error.svg'

const PageNotFound = () => (
    <div id="wrapper" className="error-page">
        <img src={icon_error} alt="error" /><br />
        <h1 className="large">Telah terjadi gangguan</h1>
        <p>Error 404</p>
    </div>
)

export default PageNotFound