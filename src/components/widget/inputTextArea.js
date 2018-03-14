import React from "react"
import PropTypes from "prop-types"
import {Field} from "redux-form"
import Textarea from 'react-textarea-autosize'
import '../../utils/stringUtils'

class InputTextAreaComponent extends React.Component {
    handleChange(event) {
        let { input } = this.props
        input.onChange(event)
    }
    
    render() {
        let {className, style, label, input, inputId, maxLength, meta: {touched, error}} = this.props
        let hasError = touched && error
        
        return (
            <div className={`${className} ${touched && (error && 'has-error has-danger')}`} style={style}>
                <Textarea {...input} 
                    className='form-control text-area' 
                    id={inputId}
                    onChange={e=>this.handleChange(e)}
                    style={{paddingTop: 0, paddingBottom: 0, overflow: 'hidden', resize: 'none'}} />
                <span className="bar"/>
                <label className={input.value && 'valid'}>{label}</label>
                <div>
                <div className="right-caption" style={{position:'inherit', float:'right', marginTop:2}}><span>{input.value.length}</span>{`/${maxLength}`}</div>
                {hasError && <div className="help-block with-errors">{error}</div>}
                </div>
            </div>
        )
    }
}
 
const InputTextArea = props => (
    <Field
        {...props}
        name={props.id}
        parse={value => value && value.substring(0, Math.min(value.length, props.maxLength))}
        component={InputTextAreaComponent}
    />
)

InputTextArea.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    label: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    validation: PropTypes.array,
    hint: PropTypes.string,
    unit: PropTypes.bool,
    pattern: PropTypes.string
}

export default InputTextArea
