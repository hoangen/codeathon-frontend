import React from 'react'
import logo from '../../assets/images/logo.svg'
import '../../assets/css/common.css'
import {connect} from "react-redux";


const mapStateToProps = (state, props) => {
    let form = state.form;
    let loginForm = form.loginInformation;
    let values = loginForm && loginForm.values;
    let username = (values && values.username);
    return {
        userName: username
    }
}


const Header = ({userName}) => (
    <div id="header">
        <div className="container">
            <a href="/" className="Logo"><img src={logo} alt="Logo" /></a>
            {!userName &&
                <a href="/login" className="login" style={{float:'right', color: '#337ab7'}}>Login</a>
            }
            {userName &&
                <p className="login" style={{float: 'right'}}>Hello {userName}</p>
            }
        </div>
    </div>
)

export default connect(mapStateToProps)(Header)

