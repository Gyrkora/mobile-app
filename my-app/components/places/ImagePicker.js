import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native'
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
} from 'expo-image-picker'
import { useState } from 'react'
import colors from '../../constants/colors'
import OutlinedButton from '../OutlinedButton'

const ImagePicker = ({ onTakeImage }) => {
	const [pickedImage, setPickedImage] = useState()

	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions()

	async function verifyPermissions() {
		if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission()

			return permissionResponse.granted
		}

		if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Permisos Insuficientes. Necesitas aceptar los permisos para usar la funcionalidad'
			)

			return false
		}

		return true
	}

	async function takeImageHandler() {
		const hasPermission = await verifyPermissions()

		if (!hasPermission) {
			return
		}

		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5,
		})

		setPickedImage(image.uri)
		onTakeImage(image.uri)
	}

	let imagePreview = <Text style={styles.textPreview}>Aún no hay fotos</Text>

	if (pickedImage) {
		imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />
	}

	return (
		<View>
			<View style={styles.imagePreview}>{imagePreview}</View>
			<OutlinedButton icon="camera" onPress={takeImageHandler}>
				Take Image
			</OutlinedButton>
		</View>
	)
}

const styles = StyleSheet.create({
	imagePreview: {
		width: '100%',
		height: 150,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.peach,
		borderRadius: 10,
		overflow: 'hidden',
	},

	textPreview: {
		textAlign: 'center',
		padding: 5,
		color: 'white',
	},

	image: {
		width: '100%',
		height: '100%',
	},
})

export default ImagePicker
