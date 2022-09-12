import { View, Text, StyleSheet, Alert, Image } from 'react-native'
import colors from '../../constants/colors'
import OutlinedButton from '../OutlinedButton'
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from 'expo-location'
import { useState, useEffect } from 'react'
import { getAddress, getMapPreview } from '../../data/location'
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native'

const LocationPicker = ({ onPickLocation }) => {
	const [pickedLocation, setPickedLocation] = useState()

	const isFocused = useIsFocused()
	const navigation = useNavigation()
	const route = useRoute()

	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions()

	useEffect(() => {
		if (isFocused && route.params) {
			const mapPickedLocation = {
				lat: route.params.pickedLat,
				lng: route.params.pickedLng,
			}
			setPickedLocation(mapPickedLocation)
		}
	}, [route, isFocused])

	useEffect(() => {
		async function handlerLocation() {
			if (pickedLocation) {
				const address = await getAddress(pickedLocation.lat, pickedLocation.lng)
				onPickLocation({ ...pickedLocation, address: address })
			}
		}

		handlerLocation()
	}, [pickedLocation, onPickLocation])

	async function verifyPermissions() {
		if (
			locationPermissionInformation.status === PermissionStatus.UNDETERMINED
		) {
			const permissionResponse = await requestPermission()

			return permissionResponse.granted
		}

		if (locationPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Permisos Insuficientes. Necesitas aceptar los permisos para usar la funcionalidad'
			)

			return false
		}

		return true
	}

	async function getLocationHandler() {
		const hasPermission = await verifyPermissions()

		if (!hasPermission) {
			return
		}

		const location = await getCurrentPositionAsync()
		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		})
	}

	function pickOnMapHandler() {
		navigation.navigate('Map')
	}

	let locationPreview = <Text>Sin locaciones</Text>

	if (pickedLocation) {
		locationPreview = (
			<Image
				style={styles.image}
				source={{
					uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
				}}
			/>
		)
	}

	return (
		<View>
			<View style={styles.mapPreview}>{locationPreview}</View>

			<View style={styles.actions}>
				<OutlinedButton icon="location" onPress={getLocationHandler}>
					localizar al usuario
				</OutlinedButton>
				<OutlinedButton icon="map" onPress={pickOnMapHandler}>
					elige un mapa
				</OutlinedButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	mapPreview: {
		width: '100%',
		height: 150,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.peach,
		borderRadius: 10,
		overflow: 'hidden',
	},

	actions: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 8,
	},

	image: {
		width: '100%',
		height: '100%',
	},
})

export default LocationPicker
