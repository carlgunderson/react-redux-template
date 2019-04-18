import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import { addExample } from '../../redux/actions'
import { selectExample, selectExampleProcessing } from '../../redux/selectors'
import Footer from '../Footer'
import Header from '../Header'
import ModalContainer from '../modals/ModalContainer'

const App = ({ addExample, exampleData, exampleProcessing }) => {
	useEffect(() => {
		addExample()
			.then(res => console.log('got some data', res))
	}, [])
	
	return (
		<div>
			<Header />
			{/* <Router> */}
				{
					exampleProcessing &&
					<h2>Processing async request</h2>
				}
				{
					exampleData &&
					JSON.stringify(exampleData)
				}
			{/* </Router> */}
			<Footer />
			<ModalContainer />
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	exampleData: selectExample(state),
	exampleProcessing: selectExampleProcessing(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	addExample: () => dispatch(addExample()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)