import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useState, useCallback } from 'react'
import colors from '../../constants/colors'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import GeneralButton from '../GeneralButton'
import { Place } from '../../models/places'

const PlaceForm = ({ onCreatePlace }) => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [pickedLocation, setPickedLocation] = useState()
	const [selectedImage, setSelectedImage] = useState()

	function changeTitleHanlder(enteredText) {
		setEnteredTitle(enteredText)
	}

	const pickLocationHandler = useCallback((location) => {
		setPickedLocation(location)
	}, [])

	function takeImageHandler(imageUri) {
		setSelectedImage(imageUri)
	}

	function savePlaceHandler() {
		const placeData = new Place(enteredTitle, selectedImage, pickedLocation)
		onCreatePlace(placeData)
	}

	return (
		<ScrollView style={styles.form}>
			<View>
				<Text style={styles.label}>Title</Text>
				<TextInput
					onChangeText={changeTitleHanlder}
					value={enteredTitle}
					style={styles.input}
				/>
			</View>
			<ImagePicker onTakeImage={takeImageHandler} />
			<LocationPicker onPickLocation={pickLocationHandler} />
			<GeneralButton onPress={savePlaceHandler}>Agrega un lugar</GeneralButton>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 25,
	},

	label: {
		fontWeight: 'bold',
		marginBottom: 4,
		color: colors.pink,
		fontSize: 17,
	},

	input: {
		marginVertical: 8,
		paddingHorizontal: 4,
		paddingVertical: 8,
		fontSize: 16,
		borderBottomColor: colors.blue,
		borderBottomWidth: 2,
		backgroundColor: colors.peach,
	},
})

export default PlaceForm
