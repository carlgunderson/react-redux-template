import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'
import HomePage from '../HomePage'
import JobsPage from '../JobsPage'
import ModalRoot from '../modals'
import MusicPage from '../MusicPage'

const App = () => (
	<Router>
		<Header />
		<main>
			<Switch>
				<Route exact path='/' component={ HomePage } />
				<Route path='/jobs' component={ JobsPage } />
				<Route path='/music' component={ MusicPage } />
			</Switch>
		</main>
		<Footer />
		<ModalRoot />
	</Router>
)

export default App