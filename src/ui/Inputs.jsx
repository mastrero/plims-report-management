import React from "react";

export const TextInput = ({
	wrapperClass = "",
	labelClass = "",
	inputClass = "",
	type = "",
	label = "",
	id = "",
	required = true,
	min = 0,
	max = 100,
	value = "",
	update = () => {},
	reference = null,
}) => (
	<div className={`input-group input-group-sm mb-2 ${wrapperClass}`}>
		<div className='input-group-prepend'>
			<label className={`input-group-text ${labelClass}`} htmlFor={id}>
				{label}
			</label>
		</div>
		<input
			className={`form-control ${inputClass}`}
			name={label}
			type={type}
			id={id}
			required={required}
			min={min}
			max={max}
			autoComplete='off'
			value={value}
			onChange={update}
			ref={reference}
		/>
		<div className='invalid-tooltip'>Please provide a valid city.</div>
	</div>
);

export const TextArea = ({
	wrapperClass = "",
	labelClass = "",
	inputClass = "",
	label = "",
	id = "",
	required = true,
	value = "",
	update = () => {},
	reference = null,
}) => (
	<div className={`input-group input-group-sm mb-2 ${wrapperClass}`}>
		<div className='input-group-prepend'>
			<label className={`input-group-text ${labelClass}`} htmlFor={id}>
				{label}
			</label>
		</div>
		<textarea
			type='address'
			className={`form-control ${inputClass}`}
			aria-label={label}
			id={id}
			required={required}
			value={value}
			onChange={update}
			ref={reference}
		/>
	</div>
);

export const MultiSelect = ({
	wrapperClass = "",
	labelClass = "",
	selectClass = "",
	id = "",
	label = "",
	options = [],
	required = true,
	value = "",
	update = () => {},
	reference = null,
}) => (
	<div className={`input-group input-group-sm mb-2 ${wrapperClass}`}>
		<div className='input-group-prepend'>
			<label className={`input-group-text ${labelClass}`} htmlFor={id}>
				{label}
			</label>
		</div>
		<select ref={reference} className={`custom-select ${selectClass}`} id={id} required={required} value={value} onChange={update}>
			<option></option>
			{options.map((option) => (
				<option key={option}>{option}</option>
			))}
		</select>
	</div>
);

export const CheckBox = ({ wrapperClass = "", labelClass = "", inputClass = "", label, id, required = true, checkboxRef = null }) => (
	<div className={`form-group form-check ${wrapperClass}`}>
		<label className={`form-check-label ${labelClass}`} htmlFor={id}>
			<input type='checkbox' className={`form-check-input ${inputClass}`} id={id} required={required} ref={checkboxRef} />
			{label}
		</label>
	</div>
);

export const SubmitButton = ({ wrapperClass = "", btnClass = "", btnText = "Submit", handleSubmit = () => {} }) => (
	<div className={`${wrapperClass}`}>
		<button type='submit' className={`btn btn-primary ${btnClass}`} onClick={handleSubmit}>
			{btnText}
		</button>
	</div>
);
