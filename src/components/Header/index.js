import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
	<header style={{ height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1em', borderBottom: '1px solid cyan' }}>
		<p>BizX</p>
		<img src='https://placehold.it/120x30' style={{ margin: '0em 1em' }} />
		<p>React + Redux Template</p>
		<p><Link to='/'>Home</Link>&nbsp;|&nbsp;<Link to='/jobs'>Jobs</Link>&nbsp;|&nbsp;<Link to='/music'>Music</Link></p>
	</header>
)

export default Header