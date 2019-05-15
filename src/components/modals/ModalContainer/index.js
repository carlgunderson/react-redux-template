import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { hideModal } from '../../../redux/actions'
import { selectModalOpen } from '../../../redux/selectors'

const styles = {
	bg: {
		position: 'absolute',
		top: 0,
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, .2)',
	},
	modal: {
		width: '300px',
		height: '300px',
		position: 'fixed',
		zIndex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		boxShadow: '0px 0px 7px 0px rgba(0, 0, 0, .3)',
	},
}

const ModalContainer = ({ children }) => {
	const dispatch = useDispatch()
	const isOpen = useSelector(selectModalOpen)
	const onClose = () => dispatch(hideModal())

	return (
		// With a modal, we should not actually remove the element from the dom like this...
		// Rather, we should animate visibility so we can have a transition
		isOpen
		? <div style={ styles.bg } onClick={ onClose }>
				<div style={ styles.modal } onClick={ e => e.stopPropagation() }>
					<p>This will be a dialog of some kind.</p>
					<button onClick={ onClose }>Click to close</button>
					{ children }
				</div>
			</div>
		: null
	)
}

ModalContainer.propTypes = {
	
}

export default ModalContainer