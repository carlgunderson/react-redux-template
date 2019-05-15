import React from 'react'
import { useDispatch } from 'react-redux'

import { showModal } from '../../redux/actions'

const HomePage = ({}) => {
	const dispatch = useDispatch()
	const showExampleModal = () => dispatch(showModal('example', { dataPoint1: true, dataPoint2: false }))

	return (
		<div>
			<button onClick={ showExampleModal }>Show example modal</button>
		</div>
	)
}

export default HomePage