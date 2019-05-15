import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { requireArtist } from '../../redux/actions'
import Button from '../common/Button'
import TextInput from '../common/TextInput'

const MusicPage = ({}) => {
	const dispatch = useDispatch()
	const getArtist = artist => dispatch(requireArtist(artist))

	const [artist, setArtist] = useState('')
	const artistData = useSelector(state => state.music.artists[artist])

	return (
		<div>
			<p>Current artist: { artist || 'none' }</p>
			<TextInput
				placeholder='Search for an artist'
				onChange={ e => setArtist(e.target.value) }
				// Props can be passed without explicitly being used in the component, like below
				maxLength={ 40 }
			/>
			<br />
			<Button onClick={ () => getArtist(artist) }>Get artist</Button>
			<br />
			{
				artistData && <p>{ artistData.primaryGenreName }</p>
			}
		</div>
	)
}

export default MusicPage