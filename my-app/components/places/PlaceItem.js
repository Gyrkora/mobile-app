import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import PlacesDetails from '../../pages/PlacesDetails'

const PlaceItem = ({ place, onSelect }) => {
	return (
		<TouchableOpacity onPress={onSelect}>
			<Image source={{ uri: place.imageUri }} />
			<View>
				<Text>{place.title}</Text>
				<Text>{place.address}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({})

export default PlaceItem
