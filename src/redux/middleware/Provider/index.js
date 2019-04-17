import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import logger from '../Logger'
import reducers from '../../reducer'

const store = createStore(
	reducers,
	applyMiddleware(thunk, logger)
)

export default store