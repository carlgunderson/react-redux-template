import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, NavLink } from 'react-router-dom'

const styles = {
	link: {
		textDecoration: 'none',
		cursor: 'pointer',
	},
}

const Link = ({
	actionLink,
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
	: actionLink
	? <span onClick={ onClick } style={ styles.link }>
			{ children }
		</span>
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
	actionLink: PropTypes.bool,
	activeStyle: PropTypes.object,
	children: PropTypes.node.isRequired,
	exact: PropTypes.bool,
	external: PropTypes.bool,
	nav: PropTypes.bool,
	onClick: PropTypes.func,
	target: PropTypes.oneOf(['_self', '_blank']),
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	unstyled: PropTypes.bool,
}

export default Link