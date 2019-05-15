import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, NavLink } from 'react-router-dom'

const styles = {
	link: {
		textDecoration: 'none',
	},
}

const Link = ({
	activeStyle,
	children,
	exact = false,
	external = false,
	nav = false,
	onClick,
	target = '_self',
	to,
	unstyled = false,
}) => (
	external
	? <a href={ to } onClick={ onClick } target={ target } style={ styles.link }>
			{ children }
		</a>
	: nav
	? <NavLink
			exact
			to={ to }
			onClick={ onClick }
			target={ target }
			style={ styles.link }
			activeStyle={{ ...activeStyle, fontWeight: 'bold' }}
		>
			{ children }
		</NavLink>
	: <RouterLink to={ to } onClick={ onClick } target={ target } style={ styles.link }>
			{ children }
		</RouterLink>
)

Link.propTypes = {
	activeStyle: PropTypes.object,
	exact: PropTypes.bool,
	external: PropTypes.bool,
	nav: PropTypes.bool,
	onClick: PropTypes.func,
	target: PropTypes.oneOf(['_self', '_blank']),
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	unstyled: PropTypes.bool,
}

export default Link