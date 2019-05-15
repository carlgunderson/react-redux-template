import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { hideModal } from '../../../redux/actions'
import { selectModalOpen } from '../../../redux/selectors'

const ModalContainer = ({ children, isOpen, onClose }) => (
	// With a modal, we should not actually remove the element from the dom like this...
	// Rather, we should animate visibility so we can have a transition
	isOpen
	?	<div
			style={{
				position: 'absolute',
				top: 0,
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'rgba(0, 0, 0, .1)',
			}}
			onClick={ onClose }
		>
			<div
				style={{
					width: '300px',
					height: '300px',
					position: 'fixed',
					zIndex: 1,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#fff',
					boxShadow: '0px 0px 7px 0px rgba(0, 0, 0, .2)',
				}}
				onClick={ e => e.stopPropagation() }
			>
				<p>This will be a dialog of some kind.</p>
				<button onClick={ onClose }>Click to close</button>
				{/* { children } */}
			</div>
		</div>
	:	null
)

ModalContainer.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
	isOpen: selectModalOpen(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClose: () => dispatch(hideModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)