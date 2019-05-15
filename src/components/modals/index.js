import { connect } from 'react-redux'

import ExampleModal from './ExampleModal'

const Modal = ({ name, data }) => {
	switch(name) {
		case 'example':
			return <ExampleModal data={ data } />
		default:
			return null
	}
}

const mapStateToProps = (state, ownProps) => ({

})

export default connect(mapStateToProps)(Modal)