export const SHOW_MODAL = 'SHOW_MODAL'

export const showModal = (name, modalProps) => (dispatch, getState) => {
	dispatch({ type: SHOW_MODAL, name, modalProps })
}

export const HIDE_MODAL = 'HIDE_MODAL'

export const hideModal = () => (dispatch, getState) => {
	dispatch({ type: HIDE_MODAL })
}

const DEFAULT_STATE = {
	isOpen: false,
	name: '',
	modalProps: null,
}

const reducer = 'modal'

const modal = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case SHOW_MODAL:
			return {
				isOpen: true
			}
		case HIDE_MODAL:
			return {
				isOpen: false
			}
		default:
			return state
	}
}

export default modal

export const selectModalOpen = state => state.modal.isOpen