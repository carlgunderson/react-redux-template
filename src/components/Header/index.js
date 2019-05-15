import React from 'react'

import Link from '../common/Link'

const Header = () => (
	<header
		style={{
			height: '60px',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: '1em',
			padding: '0em 1em',
			borderBottom: '1px solid cyan',
		}}
	>
		<img src='https://placehold.it/120x30' />
		<p>React + Redux Template</p>
		<nav style={{ cursor: 'default' }}>
			<Link to='/' nav exact activeStyle={{ color: 'green' }}>Home</Link>
			&nbsp;|&nbsp;
			<Link to='/jobs' nav>Jobs</Link>
			&nbsp;|&nbsp;
			<Link to='/music' nav>Music</Link>
		</nav>
	</header>
)

export default Header