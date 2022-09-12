import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import PlaceItem from './PlaceItem'

const PlacesList = ({ places }) => {
	const navigation = useNavigation()

	function selectPlaceHandler(id) {
		navigation.navigate('PlaceDetails', {
			placeId: id,
		})
	}

	if (!places || places.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					no places added yet - Start adding some
				</Text>
			</View>
		)
	}

	return (
		<FlatList
			style={styles.list}
			data={places}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<PlaceItem place={item} onSelect={selectPlaceHandler} />
			)}
		/>
	)
}

const styles = StyleSheet.create({
	list: {
		margin: 24,
	},

	fallbackContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	fallbackText: {
		fontSize: 16,
	},
})

export default PlacesList
