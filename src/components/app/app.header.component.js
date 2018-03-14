import React from 'react'
import logo from '../../assets/images/logo.svg'
import '../../assets/css/common.css'

const Header = () => (
    <div id="header">
        <div className="container">
            <a href="/" className="Logo"><img src={logo} alt="Logo" /></a>
            <a href="/login" className="login" style={{float:'right'}}>Login</a>
        </div>
    </div>
)

export default Header
