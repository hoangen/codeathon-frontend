import {KeyCode} from "../../common/constants";
import React from 'react';

export class InputCompanyName extends React.Component {

  constructor(props) {
    super(props)
    this.focus = ()=>{
      this.companyName.focus()
    }
    this.wasterMask = props.value ? '' : 'Cari Nama Perusahaan'
    this.state = {
      placeholder: this.wasterMask,
      text: ''
    }
  }

  componentWillReceiveProps(props) {
    this.setState({text: props.value ? props.value : ''})
  }

  onChangeCompanyName(event){
    this.setState({text: event.target.value})
    this.props.onChangeCompanyName(event)
  }

  render() {
    return (
      <div>
        <input type="text" className="form-control" placeholder={this.state.placeholder} readOnly
               style={{border: 0, backgroundColor: 'transparent', position: 'absolute', pointerEvents: 'none'}}/>
        <input {...this.props} ref={(input) => { this.companyName = input; }} value={this.state.text} onChange={event=>this.onChangeCompanyName(event)} type="text" className="form-control" maxLength={this.props.maxLength} id="companyName"
               onKeyUp={this.onKeyUp} onKeyDown={this.onKeyDown}/>
      </div>
    )
  }

  onKeyUp = event => {
    if (event.target.value.length === 0) {
      this.setState({placeholder: this.wasterMask})
    } else {
      this.setState({placeholder: ''})
    }
  }

  onKeyDown = event => {
    if (event.which === KeyCode.BACKSPACE || event.which === KeyCode.DELETE) {
      if (event.target.value.length === 1 || event.target.value.length === 0) {
        this.setState({placeholder: this.wasterMask, text: ''})
      } else {
        this.setState({placeholder: ''})
      }
    } else {
      this.setState({placeholder: ''})
    }
  }
}