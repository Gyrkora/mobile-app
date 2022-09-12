import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import OutlinedButton from '../components/OutlinedButton'
import colors from '../constants/colors'
import { useEffect } from 'react'
import { fetchPlaceDetails } from '../data/database'
import { useState } from 'react'

const PlacesDetails = ({ route, navigation }) => {
	const [fetchedPlace, setFetchedPlace] = useState()

	function showOnMapHandler() {
		navigation.navigate('Map', {
			initialLat: fetchedPlace.location.lat,
			initialLng: fetchedPlace.location.lng,
		})
	}

	const selectedPlaceId = route.params.placeId

	useEffect(() => {
		async function loadPlaceDate() {
			const place = await fetchPlaceDetails(selectedPlaceId)
			setFetchedPlace(place)
			navigation.setOptions({
				title: place.title,
			})
		}

		loadPlaceDate()
	}, [selectedPlaceId])

	if (!fetchedPlace) {
		return (
			<View style={styles.fallback}>
				<Text>Cargando...</Text>
			</View>
		)
	}

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
			<View style={styles.locationContainer}>
				<View style={styles.addressContainer}>
					<Text style={styles.address}>{fetchedPlace.address}</Text>
				</View>
				<OutlinedButton icon="map" onPress={showOnMapHandler}>
					View on Map
				</OutlinedButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	fallback: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	screen: {
		alignItems: 'center',
	},

	image: {
		height: '35%',
		minHeight: 300,
		width: '100%',
	},

	locationContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	addressContainer: {
		padding: 20,
	},

	address: {
		color: colors.pink,
		textAlign: 'center',
		fontWeight: 'bold',
	},
})

export default PlacesDetails
