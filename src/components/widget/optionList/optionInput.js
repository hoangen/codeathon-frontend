import React from 'react';
import icon_dropdown from './../../../assets/images/icon-dropdown.svg';

const OptionInput = ({
	input,
	label,
	enable,
	hint,
	text,
	id,
	className,
	meta: { touched, error }
}) => {
	return (
		<div className={`${className} ${touched && error && 'has-error has-danger'}`}>
			<label className="gray-small-text">{label}</label>
			<div className={`form-control ${!enable && 'disabled'}`} id='optionListFormControl'>
				<span className="value" id='option-list-text-span'>{text ? text : hint}</span>
				<input {...input} type="hidden" />
				<span className="glyphicon">
					<img src={icon_dropdown} alt="dropdown" />
				</span>
				{enable ? (
					<button type="button" data-toggle="modal" data-target={`#${id}`} />
				) : (
					<button type="button" data-toggle="modal" data-target={`#${id}`} disabled />
				)}
			</div>
			{touched && error && <span className="help-block with-errors">{error}</span>}
		</div>
	);
};

export default OptionInput;
