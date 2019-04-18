import * as api from '../../../api'

export const ADD_EXAMPLE_REQUEST = 'ADD_EXAMPLE_REQUEST'
export const ADD_EXAMPLE_SUCCESS = 'ADD_EXAMPLE_SUCCESS'
export const ADD_EXAMPLE_FAILURE = 'ADD_EXAMPLE_FAILURE'

export const addExample = example => (dispatch, getState) => {
	dispatch({ type: ADD_EXAMPLE_REQUEST })
	return api.fetchData()
		.then(data => {
			dispatch({ type: ADD_EXAMPLE_SUCCESS, data })
			return data
		})
		.catch(err => {
			console.log('Error adding example:', err)
			dispatch({ type: ADD_EXAMPLE_FAILURE, err })
			throw err
		})
}

const DEFAULT_STATE = {
	example: null,
	processing: false,
}

const exampleReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case ADD_EXAMPLE_REQUEST:
			return {
				...state,
				processing: true
			}
		case ADD_EXAMPLE_SUCCESS:
			return {
				...state,
				example: action.data,
				processing: false
			}
		default:
			return state
	}
}

export default exampleReducer

export const selectExample = state => state.example
export const selectExampleProcessing = state => state.example.processing