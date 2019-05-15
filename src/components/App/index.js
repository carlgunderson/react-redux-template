import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import { getJobIds, requireArtist, showModal } from '../../redux/actions'
import { selectArtist, selectArtistSongs, selectJobIds, selectHackerNewsProcessing } from '../../redux/selectors'
import Footer from '../Footer'
import Header from '../Header'
import ModalContainer from '../modals/ModalContainer'

const App = ({
	artistData,
	artistSongs,
	getJobIds,
	getArtist,
	hnProcessing,
	jobIds,
	showExampleModal,
}) => {
	useEffect(() => {
		getJobIds()
			.then(res => console.log('got some job IDs', res))
	}, [])

	const [artist, setArtist] = useState('')

	return (
		<div>
			<Header />
			<main>
				{/* <Router> */}
					{
						hnProcessing &&
						<h2>Processing async request</h2>
					}
					{
						jobIds &&
						JSON.stringify(jobIds)
					}
					<br />
					<button onClick={ showExampleModal }>Show example modal</button>
					<br />
					<p>Current artist: { artist || 'none' }</p>
					<input type='text' onChange={ e => setArtist(e.target.value) } />
					<br />
					<button onClick={ () => getArtist(artist) }>Get artist</button>
					<br />
					{
						artistData && <p>{ artistData.name }</p>
					}
				{/* </Router> */}
			</main>
			<Footer />
			<ModalContainer />
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	artistData: selectArtist(state)('diplo'),
	artistSongs: selectArtistSongs(state)('diplo'),
	jobIds: selectJobIds(state),
	hnProcessing: selectHackerNewsProcessing(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	getJobIds: () => dispatch(getJobIds()),
	getArtist: artist => dispatch(requireArtist(artist)), // Could also use ownProps
	showExampleModal: () => dispatch(showModal('example', { dataPoint1: true, dataPoint2: false })),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)