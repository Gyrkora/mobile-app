import React, { useEffect, useState } from 'react'
import PlacesList from '../components/places/PlacesList'
import { useIsFocused } from '@react-navigation/native'
import { fetchPlaces } from '../data/database'

const AllPlaces = ({ route }) => {
	const [loadedPlaces, setLoadedPlaces] = useState([])

	const isFocused = useIsFocused()

	useEffect(() => {
		async function loadedPlaces() {
			const places = await fetchPlaces()
			setLoadedPlaces(places)
		}

		if (isFocused) {
			loadedPlaces()
			// setLoadedPlaces((currPlaces) => [...currPlaces, route.params.place])
		}
	}, [isFocused])

	if (loadedPlaces.includes(undefined)) {
		setLoadedPlaces([])
	}

	return <PlacesList places={loadedPlaces} />
}

export default AllPlaces
