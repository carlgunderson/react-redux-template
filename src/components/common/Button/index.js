import React from 'react'
import PropTypes from 'prop-types'

const styles = {
	button: {
		padding: '4px 8px',
		border: '1px solid orangered',
		borderRadius: '4px',
		outline: 'none',
	},
}

const Button = ({
	children,
	onClick,
	type = 'button',
	value,
}) => (
	<button type={ type } onClick={ onClick } value={ value } style={ styles.button }>
		{ children }
	</button>
)

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
}

export default Button