import { connect } from 'react-redux'

import ExampleModal from './ExampleModal'

const Modal = ({ name, modalProps }) => {
	switch(name) {
		case 'example':
			return <ExampleModal modalProps={ modalProps } />
		default:
			return null
	}
}

const mapStateToProps = (state, ownProps) => ({

})

export default connect(mapStateToProps)(Modal)