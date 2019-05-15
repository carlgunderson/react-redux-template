import React from 'react'
import { connect } from 'react-redux'

import { selectModalData } from '../../redux/selectors'
import ModalContainer from './ModalContainer'

const ExampleModal = ({ data }) => (
	<ModalContainer>
		<div>
			<h4>Modal props for ExampleModal</h4>
			<p>{ data.dataPoint1 }<br />{ data.dataPoint2 }</p>
		</div>
	</ModalContainer>
)

const mapStateToProps = (state, ownProps) => ({
	data: selectModalData(state),
})

export default connect(mapStateToProps)(ExampleModal)