import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import { addExample } from '../../redux/actions'
import { selectExampleProcessing } from '../../redux/selectors'
import Footer from '../Footer'
import Header from '../Header'
import ModalContainer from '../modals/ModalContainer'

const App = ({ addExample, exampleProcessing }) => {
	useEffect(() => {
		addExample()
			.then(res => console.log('hello', res))
	}, [])
	
	return (
		<div>
			<Header />
				<Router>
					{
						exampleProcessing &&
						<h2>Processing async request</h2>
					}
				</Router>
			<Footer />
			<ModalContainer />
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	exampleProcessing: selectExampleProcessing(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	addExample: () => dispatch(addExample()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)