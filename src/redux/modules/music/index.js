// import { createSelector } from 'reselect'

import { musicApi } from '../../../api'

export const GET_ARTIST_REQUEST = 'GET_ARTIST_REQUEST'
export const GET_ARTIST_SUCCESS = 'GET_ARTIST_SUCCESS'
export const GET_ARTIST_FAILURE = 'GET_ARTIST_FAILURE'

export const getArtist = artist => (dispatch, getState) => {
	dispatch({ type: GET_ARTIST_REQUEST, artist })
	return musicApi.fetchArtist(artist)
		.then(data => {
			dispatch({ type: GET_ARTIST_SUCCESS, artist, data })
			return data
		})
		.catch(err => {
			console.log('Error getting artist:', err)
			dispatch({ type: GET_ARTIST_FAILURE, err })
			throw err
		})
}

export const requireArtist = artist => (dispatch, getState) => {
	const state = getState().music

	return state.artists[artist]
		? state.artists[artist]
		: dispatch(getArtist(artist))
}

export const GET_SONGS_BY_ARTIST_REQUEST = 'GET_SONGS_BY_ARTIST_REQUEST'
export const GET_SONGS_BY_ARTIST_SUCCESS = 'GET_SONGS_BY_ARTIST_SUCCESS'
export const GET_SONGS_BY_ARTIST_FAILURE = 'GET_SONGS_BY_ARTIST_FAILURE'

export const getSongsByArtist = artist => (dispatch, getState) => {
	dispatch({ type: GET_SONGS_BY_ARTIST_REQUEST, artist })
	return musicApi.fetchSongsByArtist(artist)
		.then(data => {
			dispatch({ type: GET_SONGS_BY_ARTIST_SUCCESS, artist, data })
			return data
		})
		.catch(err => {
			console.log('Error getting songs by artist:', err)
			dispatch({ type: GET_SONGS_BY_ARTIST_FAILURE, err })
			throw err
		})
}

const DEFAULT_STATE = {
	artists: {},
	processing: false,
}

const musicReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case GET_ARTIST_REQUEST:
		case GET_SONGS_BY_ARTIST_REQUEST:
			return {
				...state,
				processing: true
			}
		case GET_ARTIST_SUCCESS:
			return {
				...state,
				artists: {
					...state.artists,
					[action.artist]: action.data.results[0],
				},
				processing: false,
			}
		default:
			return state
	}
}

export default musicReducer