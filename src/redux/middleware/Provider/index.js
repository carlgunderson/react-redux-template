import { createStore, combineReducers, applyMiddleware } from 'redux'

import logger from '../Logger'
import reducers from '../../reducer'

const app = combineReducers(reducers)
const store = createStore(
	reducers,
	applyMiddleware(logger)
)

export default store