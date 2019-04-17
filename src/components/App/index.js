import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import { addExample } from '../../redux/actions'
import Footer from '../Footer'
import Header from '../Header'
import ModalContainer from '../modals/ModalContainer'

const App = ({ addExample }) => {
	useEffect(() => {
		addExample()
			.then(res => console.log('hello'))
	})
	
	return (
		<div>
			<Header />
				<Router>

				</Router>
			<Footer />
			<ModalContainer />
		</div>
	)
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	addExample: () => dispatch(addExample())
})

export default connect(null, mapDispatchToProps)(App)