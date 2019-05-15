import React from 'react'
import PropTypes from 'prop-types'

const styles = {
	input: {
		padding: '4px 8px',
		border: '1px solid forestgreen',
		borderRadius: '4px',
		outline: 'none',
	},
}

const TextInput = ({
	onChange,
	placeholder = '',
	type = 'text',
	value,
	...props // Acts as a pass-through for any other props that can be attached to the wrapped component, e.g. `maxLength`
}) => (
	<input
		{ ...props }
		type={ type }
		placeholder={ placeholder }
		onChange={ onChange }
		value={ value }
		style={ styles.input }
	/>
)

TextInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
}

export default TextInput