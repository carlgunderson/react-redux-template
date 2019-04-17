import { combineReducers } from 'redux'

import example from './modules/example'
import modal from './modules/modal'

export default combineReducers({
	example,
	modal,
})