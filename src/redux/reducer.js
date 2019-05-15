import { combineReducers } from 'redux'

import hackerNewsReducer from './modules/hackerNews'
import modalReducer from './modules/modal'
import musicReducer from './modules/music'

export default combineReducers({
	hackerNews: hackerNewsReducer,
	modal: modalReducer,
	music: musicReducer,
})