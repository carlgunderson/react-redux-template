export const OPEN_MODAL = 'OPEN_MODAL'

export const openModal = () => (dispatch, getState) => {
	dispatch({ type: OPEN_MODAL })
}

export const CLOSE_MODAL = 'CLOSE_MODAL'

export const closeModal = () => (dispatch, getState) => {
	dispatch({ type: CLOSE_MODAL })
}

const DEFAULT_STATE = {
	isOpen: false,
}

const reducer = 'modal'

const modal = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				isOpen: true
			}
		case CLOSE_MODAL:
			return {
				isOpen: false
			}
		default:
			return state
	}
}

export default modal

export const selectModalOpen = state => state.modal.isOpen