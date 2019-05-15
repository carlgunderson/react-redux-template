import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getJobIds } from '../../redux/actions'
import { selectJobIds, selectHackerNewsProcessing } from '../../redux/selectors'

const JobsPage = ({}) => {
	const dispatch = useDispatch()
	const loadJobIds = () => dispatch(getJobIds())

	useEffect(() => {
		loadJobIds()
			.then(res => console.log('got some job IDs', res))
	}, [])

	const jobIds = useSelector(selectJobIds)
	const hnProcessing = useSelector(selectHackerNewsProcessing)

	return (
		<div>
			{
				hnProcessing &&
				<h2>Processing async request</h2>
			}
			{
				jobIds &&
				JSON.stringify(jobIds, null, 2)
			}
		</div>
	)
}

export default JobsPage