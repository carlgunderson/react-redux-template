import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectModalOpen } from '../../../redux/selectors'

const ModalContainer = ({ isOpen, onClose }) => (
	<div></div>
)

ModalContainer.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
	isOpen: selectModalOpen(state),
})

export default connect(mapStateToProps)(ModalContainer)