import { useCallback, useLayoutEffect, useState } from 'react'
import { StyleSheet, Alert } from 'react-native'
import MapView, { Marker, marker } from 'react-native-maps'
import IconButton from '../components/IconButton'

const Map = ({ navigation, route }) => {
	const initialLocation = route.params && {
		lat: route.params.initialLat,
		lng: route.params.initialLng,
	}
	const [selectedLocation, setSelectedLocation] = useState(initialLocation)

	const region = {
		latitude: initialLocation ? initialLocation.lat : 37.78,
		longitude: initialLocation ? initialLocation.lng : -122.43,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}

	function selectLocationHandler(event) {
		if (initialLocation) {
			return
		}

		const lat = event.nativeEvent.coordinate.latitude
		const lng = event.nativeEvent.coordinate.longitude

		setSelectedLocation({ lat: lat, lng: lng })
	}

	const savePickedLocationHandler = useCallback(() => {
		if (!selectedLocation) {
			Alert.alert('No se ha seleccionado una locación aún')
			return
		}

		navigation.navigate('AddPlaces', {
			pickedLat: selectedLocation.lat,
			pickedLng: selectedLocation.lng,
		})
	}, [navigation, selectedLocation, initialLocation])

	useLayoutEffect(() => {
		if (initialLocation) {
			return
		}

		navigation.setOptions({
			headerRight: ({ tintiColor }) => (
				<IconButton
					icon="save"
					size={24}
					color={tintiColor}
					onPress={savePickedLocationHandler}
				/>
			),
		})
	}, [navigation, savePickedLocationHandler])

	return (
		<MapView
			style={styles.map}
			initialRegion={region}
			onPress={selectLocationHandler}
		>
			{selectedLocation && (
				<Marker
					title="locación elegida"
					coordinate={{
						latitude: selectedLocation.lat,
						longitude: selectedLocation.lng,
					}}
				/>
			)}
		</MapView>
	)
}

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
})

export default Map
