import React from 'react'
import {reduxForm} from 'redux-form'
import validation from '../../utils/validationUtils'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import ObjectUtils from '../../utils/objectUtils'
import {MaxLength, ReduxForm} from '../../common/constants'
import Input from '../widget/input'
import '../../assets/css/customer-personal-information.css'

let LoginFormView = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div id='stepPersonalInformation' className='step-content'>
        <div className='container'>
          <div className="row">
            <h3 className="col-sm-12 col-xs-12 margin-bottom-10">Welcome To FinCrime AI Alliance</h3>
          </div>

          <div className="row">
            <div className="col-sm-6 col-xs-12">
                <Input
                    className='form-group field-style left0'
                    id='username'
                    label='Username'
                    maxLength={MaxLength.INPUT_FULL_NAME}
                    validate={[validation.loginPage.usernameValidate]}
                    type='text'/>
              <Input
                className='form-group field-style margin-top-50 left0'
                id='password'
                label='Password'
                maxLength={MaxLength.INPUT_FULL_NAME}
                validate={[validation.loginPage.passwordValidate]}
                type='password'/>
            </div>
          </div>
          <div className='row margin-top-30'>
            <button type='submit' className='btn btn-blue' style={{'margin-left':'12px'}}>Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = (state, ownProps) => {
    console.log("hello");
  var formLogin = state.form.loginPage
  var formValues = formLogin && formLogin.values
  var username, password;
  if (!ObjectUtils.isEmpty(formValues)) {
      username = formValues.username;
      password = formValues.password;
  }
  return {
      username,
      password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(reduxForm({
  form: ReduxForm.FORM_LOGIN_INFORMATION,
  touchOnBlur: true,
  touchOnChange: false,
  destroyOnUnmount: false
})(LoginFormView)))