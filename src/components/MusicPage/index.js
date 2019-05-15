import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { requireArtist } from '../../redux/actions'

const MusicPage = ({}) => {
	const dispatch = useDispatch()
	const getArtist = artist => dispatch(requireArtist(artist))

	const [artist, setArtist] = useState('')
	const artistData = useSelector(state => state.music.artists[artist])

	return (
		<div>
			<p>Current artist: { artist || 'none' }</p>
			<input type='text' onChange={ e => setArtist(e.target.value) } />
			<br />
			<button onClick={ () => getArtist(artist) }>Get artist</button>
			<br />
			{
				artistData && <p>{ artistData.primaryGenreName }</p>
			}
		</div>
	)
}

export default MusicPage