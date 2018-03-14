import React from "react"
import PropTypes from "prop-types"
import {Field} from "redux-form"
import '../../utils/stringUtils';

const renderField = ({
                         input,
                         style,
                         label,
                         type,
                         id,
                         className,
                         maxLength,
                         meta: {touched, error},
                         unit,
                         hint,
                         caption
                     }) => {
    let hasError = touched && error

    return (
        <div className={`${className} ${touched && (error && 'has-error has-danger')}`} style={style}>
            <input {...input} type={type} placeholder={hint}
                   className={`${"form-control"} ${unit && 'input-with-unit'}`} id={id} maxLength={maxLength}/>
            <span className="bar"/>
            <label htmlFor={id} className={input.value && 'valid'}>{label}</label>
            {!hasError && caption && <div className="caption">{caption}</div>}
            {unit && <span className="unit">Rp</span>}
            {hasError && <span className="help-block with-errors">{error}</span>}
        </div>
    )
}

const Input = props => (
    <Field
        {...props}
        name={props.id}
        component={renderField}
    />
)

Input.propTypes = {
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

export default Input
